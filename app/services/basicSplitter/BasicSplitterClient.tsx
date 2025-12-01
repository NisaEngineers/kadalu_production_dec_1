"use client";
import { useState, useRef, useEffect } from "react";

const Waveform = () => (
  <div className="waveform">
    {[...Array(5)].map((_, i) => (
      <div key={i} />
    ))}
  </div>
);

export default function BasicSplitterClient() {
  const [uploaded, setUploaded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [originalAudioURL, setOriginalAudioURL] = useState<string | null>(null);
  const [splitTracks, setSplitTracks] = useState({
    vocals: "",
    music: "",
    bass: "",
    drums: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [userId, setUserId] = useState<string>("");

  // Refs — allow null
  const originalAudioRef = useRef<HTMLAudioElement>(null);
  const vocalsAudioRef = useRef<HTMLAudioElement>(null);
  const musicAudioRef = useRef<HTMLAudioElement>(null);
  const bassAudioRef = useRef<HTMLAudioElement>(null);
  const drumsAudioRef = useRef<HTMLAudioElement>(null);

  // Volume & Play States
  const [originalVolume, setOriginalVolume] = useState(0);
  const [vocalsVolume, setVocalsVolume] = useState(0);
  const [musicVolume, setMusicVolume] = useState(0);
  const [bassVolume, setBassVolume] = useState(0);
  const [drumsVolume, setDrumsVolume] = useState(0);
  const [isPlayingOriginal, setIsPlayingOriginal] = useState(false);
  const [isPlayingVocals, setIsPlayingVocals] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isPlayingBass, setIsPlayingBass] = useState(false);
  const [isPlayingDrums, setIsPlayingDrums] = useState(false);

  // Generate random 4-digit user ID
  const generateUserId = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const file = event.target.files[0];
      setUploadedFile(file);
      setOriginalAudioURL(URL.createObjectURL(file));
      setUploaded(true);
      setError(null);
      setSplitTracks({ vocals: "", music: "", bass: "", drums: "" });
      setUserId(generateUserId());
    }
  };

  const handleProcess = async () => {
    if (!uploadedFile || !userId) return;
    setProcessing(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", uploadedFile);
      formData.append("userId", userId);
      const response = await fetch("/api/basic/proxy", {
        method: "POST",
        body: formData,
      });
      let data: any;
      const contentType = response.headers.get("content-type") || "";
      try {
        data = contentType.includes("application/json")
          ? await response.json()
          : { detail: await response.text() };
      } catch {
        data = { detail: "Failed to parse response" };
      }
      if (!response.ok) {
        throw new Error(data.detail || data.message || `HTTP ${response.status}`);
      }
      if (!data.stems || !Array.isArray(data.stems)) {
        throw new Error("Invalid response: missing stems");
      }
      const baseUrl = "https://api-basic.monaarch.org";
      const stemMap: Record<string, string> = {};
      data.stems.forEach((s: any) => {
        if (s.stem && s.mp3) {
          stemMap[s.stem] = `${baseUrl}${s.mp3}`;
        }
      });
      const tracks = {
        vocals: stemMap.vocals || "",
        music: stemMap.other || "",
        bass: stemMap.bass || "",
        drums: stemMap.drums || ""
      };
      if (!tracks.vocals || !tracks.music || !tracks.bass || !tracks.drums) {
        throw new Error("One or more stems missing");
      }
      setSplitTracks(tracks);
    } catch (err: any) {
      console.error("Processing error:", err);
      setError(err.message || "Audio processing failed");
    } finally {
      setProcessing(false);
    }
  };

  // Fixed: Accept | null
  const togglePlayPause = (
    ref: React.RefObject<HTMLAudioElement | null>,
    isPlaying: boolean,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    volume: number,
    setVolume: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (!ref.current) return;
    if (isPlaying) {
      ref.current.pause();
    } else {
      if (volume === 0) setVolume(50);
      ref.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  // Fixed: Accept | null
  const handleVolumeChange = (
    ref: React.RefObject<HTMLAudioElement | null>,
    value: number,
    setVolume: React.Dispatch<React.SetStateAction<number>>,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setVolume(value);
    if (!ref.current) return;
    ref.current.volume = value / 100;
    if (value === 0 && !ref.current.paused) {
      ref.current.pause();
      setIsPlaying(false);
    }
  };

  // Fixed: Accept | null in sync
  useEffect(() => {
    const sync = (ref: React.RefObject<HTMLAudioElement | null>, vol: number) => {
      if (ref.current) {
        ref.current.volume = vol / 100;
      }
    };
    sync(originalAudioRef, originalVolume);
    sync(vocalsAudioRef, vocalsVolume);
    sync(musicAudioRef, musicVolume);
    sync(bassAudioRef, bassVolume);
    sync(drumsAudioRef, drumsVolume);
  }, [originalVolume, vocalsVolume, musicVolume, bassVolume, drumsVolume]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover" src="/Basic_BG.mp4" autoPlay loop muted />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="pb-12 text-center">
              <h1 className="text-4xl font-bold md:text-5xl text-green-300">Basic Splitter</h1>
              <p className="text-lg mt-4 text-gray-300 max-w-3xl mx-auto">
                Splits Voice, Music, Drums and Bass
              </p>
              {error && (
                <div className="mt-4 p-3 bg-red-800/50 rounded-lg text-red-300">
                  Error: {error}
                </div>
              )}
            </div>

            {/* Upload */}
            {!uploaded ? (
              <form className="mx-auto max-w-md bg-transparent">
                <div className="space-y-5">
                  <div className="relative">
                    <input
                      id="upload"
                      type="file"
                      accept="audio/*"
                      className="w-full h-12 opacity-0 cursor-pointer"
                      onChange={handleUpload}
                      required
                    />
                    <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg bg-transparent pointer-events-none">
                      <p className="text-gray-200 opacity-80">
                        Click to Choose a File<span className="text-red-500">*</span>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="mt-6">
                {!processing ? (
                  <div className="text-center">
                    <button
                      className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded shadow hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                      onClick={handleProcess}
                    >
                      Process Audio
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center mt-6">
                    <div className="flex items-center space-x-2 text-white">
                      <div className="loader-dot"></div>
                      <div className="loader-dot"></div>
                      <div className="loader-dot"></div>
                      <span>Processing...</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Results */}
            {uploaded && !processing && splitTracks.vocals && (
              <div className="mt-10 space-y-12">
                {/* Original */}
                <div className="p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent">
                  <h2 className="text-xl font-semibold mb-4 text-center">Original Audio</h2>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => togglePlayPause(originalAudioRef, isPlayingOriginal, setIsPlayingOriginal, originalVolume, setOriginalVolume)}
                        className="play-button focus:outline-none"
                      >
                        {isPlayingOriginal ? (
                          <svg className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z" />
                          </svg>
                        ) : (
                          <svg className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 3.5v17l14-8.5-14-8.5z" />
                          </svg>
                        )}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={originalVolume}
                        onChange={(e) => handleVolumeChange(originalAudioRef, Number(e.target.value), setOriginalVolume, setIsPlayingOriginal)}
                        className="w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-400 appearance-none cursor-pointer slider-thumb rounded-full"
                      />
                    </div>
                    {isPlayingOriginal && <Waveform />}
                    <audio ref={originalAudioRef} src={originalAudioURL!} onEnded={() => setIsPlayingOriginal(false)} />
                  </div>
                </div>

                {/* Split Tracks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { name: "Vocals", ref: vocalsAudioRef, volume: vocalsVolume, setVolume: setVocalsVolume, isPlaying: isPlayingVocals, setIsPlaying: setIsPlayingVocals, url: splitTracks.vocals, color: "bg-purple-600 hover:bg-purple-700" },
                    { name: "Music", ref: musicAudioRef, volume: musicVolume, setVolume: setMusicVolume, isPlaying: isPlayingMusic, setIsPlaying: setIsPlayingMusic, url: splitTracks.music, color: "bg-teal-600 hover:bg-teal-700" },
                    { name: "Bass", ref: bassAudioRef, volume: bassVolume, setVolume: setBassVolume, isPlaying: isPlayingBass, setIsPlaying: setIsPlayingBass, url: splitTracks.bass, color: "bg-yellow-600 hover:bg-yellow-700" },
                    { name: "Drums", ref: drumsAudioRef, volume: drumsVolume, setVolume: setDrumsVolume, isPlaying: isPlayingDrums, setIsPlaying: setIsPlayingDrums, url: splitTracks.drums, color: "bg-red-600 hover:bg-red-700" },
                  ].map((track) => (
                    <div key={track.name} className="p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent">
                      <h2 className="text-xl font-semibold mb-4 text-center">{track.name}</h2>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => togglePlayPause(track.ref, track.isPlaying, track.setIsPlaying, track.volume, track.setVolume)}
                            className="play-button focus:outline-none"
                          >
                            {track.isPlaying ? (
                              <svg className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z" />
                              </svg>
                            ) : (
                              <svg className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5 3.5v17l14-8.5-14-8.5z" />
                              </svg>
                            )}
                          </button>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={track.volume}
                            onChange={(e) => handleVolumeChange(track.ref, Number(e.target.value), track.setVolume, track.setIsPlaying)}
                            className="w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-400 appearance-none cursor-pointer slider-thumb rounded-full"
                          />
                        </div>
                        {track.isPlaying && <Waveform />}
                        <audio ref={track.ref} src={track.url} onEnded={() => track.setIsPlaying(false)} />
                        <div className="mt-6 flex justify-center">
                          <a
                            href={track.url}
                            download={`${track.name.toLowerCase()}.mp3`}
                            className={`px-6 py-3 ${track.color} text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center`}
                          >
                            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z" />
                              <path d="M7 10l3 3 3-3H9V4H7v6H4l3 3z" />
                            </svg>
                            Download {track.name}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .loader-dot { 
          width: 10px; 
          height: 10px; 
          background: #ddd; 
          border-radius: 50%; 
          animation: loader 1s infinite alternate; 
        }
        @keyframes loader { 
          to { transform: scale(1.5); background: #ec4899; } 
        }
        .waveform { 
          display: flex; 
          gap: 4px; 
          height: 40px; 
          align-items: flex-end; 
          margin: 1rem auto 0; 
          width: fit-content; 
        }
        .waveform div { 
          width: 20px; 
          background: linear-gradient(to top, #6366f1, #ec4899); 
          border-radius: 3px; 
          animation: pulse 0.8s infinite ease-in-out; 
          transform-origin: bottom; 
        }
        .waveform div:nth-child(1) { height: 18px; animation-delay: 0.1s; }
        .waveform div:nth-child(2) { height: 22px; animation-delay: 0.2s; }
        .waveform div:nth-child(3) { height: 16px; animation-delay: 0.3s; }
        .waveform div:nth-child(4) { height: 24px; animation-delay: 0.4s; }
        .waveform div:nth-child(5) { height: 14px; animation-delay: 0.5s; }
        @keyframes pulse { 
          0%, 100% { transform: scaleY(0.6); } 
          50% { transform: scaleY(1.4); } 
        }
        .slider-thumb::-webkit-slider-thumb { 
          width: 16px; height: 16px; 
          background: linear-gradient(45deg, #6366f1, #ec4899); 
          border: 2px solid #fff; 
          border-radius: 50%; 
        }
        .slider-thumb::-moz-range-thumb {
          width: 16px; height: 16px;
          background: linear-gradient(45deg, #6366f1, #ec4899);
          border: 2px solid #fff;
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
}
