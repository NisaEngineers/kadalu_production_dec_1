module.exports = {

"[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// PremiumSplitterClient.tsx
__turbopack_esm__({
    "default": (()=>PremiumSplitterClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function PremiumSplitterClient() {
    const [uploaded, setUploaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [splitting, setSplitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [originalAudioURL, setOriginalAudioURL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [vocalAudioURL, setVocalAudioURL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [drumsAudioURL, setDrumsAudioURL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [guitarAudioURL, setGuitarAudioURL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pianoAudioURL, setPianoAudioURL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [bassAudioURL, setBassAudioURL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [otherAudioURL, setOtherAudioURL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPlayingOriginal, setIsPlayingOriginal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingVocal, setIsPlayingVocal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingDrums, setIsPlayingDrums] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingGuitar, setIsPlayingGuitar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingPiano, setIsPlayingPiano] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingBass, setIsPlayingBass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlayingOther, setIsPlayingOther] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [originalVolume, setOriginalVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [vocalVolume, setVocalVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [drumsVolume, setDrumsVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [guitarVolume, setGuitarVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pianoVolume, setPianoVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [bassVolume, setBassVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [otherVolume, setOtherVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isOriginalPaused, setIsOriginalPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVocalPaused, setIsVocalPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isDrumsPaused, setIsDrumsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isGuitarPaused, setIsGuitarPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPianoPaused, setIsPianoPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isBassPaused, setIsBassPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isOtherPaused, setIsOtherPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [uploadedFile, setUploadedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Refs for audio elements
    const originalAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const vocalAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const drumsAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const guitarAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pianoAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bassAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const otherAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleUpload = (event)=>{
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const url = URL.createObjectURL(file);
            setUploadedFile(file);
            setOriginalAudioURL(url);
            setUploaded(true);
            setError(null);
        }
    };
    const handleSplit = async ()=>{
        if (!uploadedFile) return;
        setSplitting(true);
        setError(null);
        try {
            const formData = new FormData();
            formData.append("file", uploadedFile);
            const response = await fetch("https://fdba66981a47.ngrok-free.app/separate/", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.detail || "Processing failed");
            }
            if (data.files?.length >= 6) {
                const API_BASE = "https://fdba66981a47.ngrok-free.app";
                const stemUrls = {};
                for (const url of data.files){
                    const filename = url.split('/').pop();
                    if (filename) {
                        stemUrls[filename] = `${API_BASE}${url}`;
                    }
                }
                setVocalAudioURL(stemUrls["vocals.wav"]);
                setDrumsAudioURL(stemUrls["drums.wav"]);
                setGuitarAudioURL(stemUrls["guitar.wav"]);
                setPianoAudioURL(stemUrls["piano.wav"]);
                setBassAudioURL(stemUrls["bass.wav"]);
                setOtherAudioURL(stemUrls["strings_or_pads.wav"]);
            } else {
                throw new Error("Invalid server response");
            }
        } catch (err) {
            console.error("Processing error:", err);
            setError(err instanceof Error ? err.message : "Audio processing failed");
        } finally{
            setSplitting(false);
        }
    };
    const toggleOriginalPlayPause = ()=>{
        if (originalAudioRef.current) {
            if (isOriginalPaused) {
                originalAudioRef.current.play();
                setIsPlayingOriginal(true);
                setIsOriginalPaused(false);
                if (originalVolume === 0) setOriginalVolume(50);
            } else {
                originalAudioRef.current.pause();
                setIsPlayingOriginal(false);
                setIsOriginalPaused(true);
            }
        }
    };
    const handleOriginalVolumeChange = (value)=>{
        setOriginalVolume(value);
        if (originalAudioRef.current) {
            originalAudioRef.current.volume = value / 100;
            originalAudioRef.current[value === 0 ? 'pause' : 'play']();
            setIsPlayingOriginal(value !== 0);
            setIsOriginalPaused(value === 0);
        }
    };
    const toggleVocalPlayPause = ()=>{
        if (vocalAudioRef.current) {
            if (isVocalPaused) {
                vocalAudioRef.current.play();
                setIsPlayingVocal(true);
                setIsVocalPaused(false);
                if (vocalVolume === 0) setVocalVolume(50);
            } else {
                vocalAudioRef.current.pause();
                setIsPlayingVocal(false);
                setIsVocalPaused(true);
            }
        }
    };
    const handleVocalVolumeChange = (value)=>{
        setVocalVolume(value);
        if (vocalAudioRef.current) {
            vocalAudioRef.current.volume = value / 100;
            vocalAudioRef.current[value === 0 ? 'pause' : 'play']();
            setIsPlayingVocal(value !== 0);
            setIsVocalPaused(value === 0);
        }
    };
    const toggleDrumsPlayPause = ()=>{
        if (drumsAudioRef.current) {
            if (isDrumsPaused) {
                drumsAudioRef.current.play();
                setIsPlayingDrums(true);
                setIsDrumsPaused(false);
                if (drumsVolume === 0) setDrumsVolume(50);
            } else {
                drumsAudioRef.current.pause();
                setIsPlayingDrums(false);
                setIsDrumsPaused(true);
            }
        }
    };
    const handleDrumsVolumeChange = (value)=>{
        setDrumsVolume(value);
        if (drumsAudioRef.current) {
            drumsAudioRef.current.volume = value / 100;
            drumsAudioRef.current[value === 0 ? 'pause' : 'play']();
            setIsPlayingDrums(value !== 0);
            setIsDrumsPaused(value === 0);
        }
    };
    const toggleGuitarPlayPause = ()=>{
        if (guitarAudioRef.current) {
            if (isGuitarPaused) {
                guitarAudioRef.current.play();
                setIsPlayingGuitar(true);
                setIsGuitarPaused(false);
                if (guitarVolume === 0) setGuitarVolume(50);
            } else {
                guitarAudioRef.current.pause();
                setIsPlayingGuitar(false);
                setIsGuitarPaused(true);
            }
        }
    };
    const handleGuitarVolumeChange = (value)=>{
        setGuitarVolume(value);
        if (guitarAudioRef.current) {
            guitarAudioRef.current.volume = value / 100;
            guitarAudioRef.current[value === 0 ? 'pause' : 'play']();
            setIsPlayingGuitar(value !== 0);
            setIsGuitarPaused(value === 0);
        }
    };
    const togglePianoPlayPause = ()=>{
        if (pianoAudioRef.current) {
            if (isPianoPaused) {
                pianoAudioRef.current.play();
                setIsPlayingPiano(true);
                setIsPianoPaused(false);
                if (pianoVolume === 0) setPianoVolume(50);
            } else {
                pianoAudioRef.current.pause();
                setIsPlayingPiano(false);
                setIsPianoPaused(true);
            }
        }
    };
    const handlePianoVolumeChange = (value)=>{
        setPianoVolume(value);
        if (pianoAudioRef.current) {
            pianoAudioRef.current.volume = value / 100;
            pianoAudioRef.current[value === 0 ? 'pause' : 'play']();
            setIsPlayingPiano(value !== 0);
            setIsPianoPaused(value === 0);
        }
    };
    const toggleBassPlayPause = ()=>{
        if (bassAudioRef.current) {
            if (isBassPaused) {
                bassAudioRef.current.play();
                setIsPlayingBass(true);
                setIsBassPaused(false);
                if (bassVolume === 0) setBassVolume(50);
            } else {
                bassAudioRef.current.pause();
                setIsPlayingBass(false);
                setIsBassPaused(true);
            }
        }
    };
    const handleBassVolumeChange = (value)=>{
        setBassVolume(value);
        if (bassAudioRef.current) {
            bassAudioRef.current.volume = value / 100;
            bassAudioRef.current[value === 0 ? 'pause' : 'play']();
            setIsPlayingBass(value !== 0);
            setIsBassPaused(value === 0);
        }
    };
    const toggleOtherPlayPause = ()=>{
        if (otherAudioRef.current) {
            if (isOtherPaused) {
                otherAudioRef.current.play();
                setIsPlayingOther(true);
                setIsOtherPaused(false);
                if (otherVolume === 0) setOtherVolume(50);
            } else {
                otherAudioRef.current.pause();
                setIsPlayingOther(false);
                setIsOtherPaused(true);
            }
        }
    };
    const handleOtherVolumeChange = (value)=>{
        setOtherVolume(value);
        if (otherAudioRef.current) {
            otherAudioRef.current.volume = value / 100;
            otherAudioRef.current[value === 0 ? 'pause' : 'play']();
            setIsPlayingOther(value !== 0);
            setIsOtherPaused(value === 0);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (originalAudioRef.current) originalAudioRef.current.volume = originalVolume / 100;
        if (vocalAudioRef.current) vocalAudioRef.current.volume = vocalVolume / 100;
        if (drumsAudioRef.current) drumsAudioRef.current.volume = drumsVolume / 100;
        if (guitarAudioRef.current) guitarAudioRef.current.volume = guitarVolume / 100;
        if (pianoAudioRef.current) pianoAudioRef.current.volume = pianoVolume / 100;
        if (bassAudioRef.current) bassAudioRef.current.volume = bassVolume / 100;
        if (otherAudioRef.current) otherAudioRef.current.volume = otherVolume / 100;
    }, [
        originalVolume,
        vocalVolume,
        drumsVolume,
        guitarVolume,
        pianoVolume,
        bassVolume,
        otherVolume
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-9e7d8ea10325fe45" + " " + "relative min-h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                src: "/Vocal_BG.mp4",
                autoPlay: true,
                loop: true,
                muted: true,
                className: "jsx-9e7d8ea10325fe45" + " " + "absolute top-0 left-0 w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-9e7d8ea10325fe45" + " " + "absolute top-0 left-0 w-full h-full bg-black opacity-50"
            }, void 0, false, {
                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-9e7d8ea10325fe45" + " " + "relative z-10 text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-9e7d8ea10325fe45" + " " + "container mx-auto px-4 sm:px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-9e7d8ea10325fe45" + " " + "py-12 md:py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-9e7d8ea10325fe45" + " " + "pb-12 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-9e7d8ea10325fe45" + " " + "text-4xl font-bold md:text-5xl text-green-300",
                                        children: "Premium Splitter"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-9e7d8ea10325fe45" + " " + "text-lg mt-4 text-gray-300 max-w-3xl mx-auto",
                                        children: "Split your audio tracks into multiple instruments."
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9e7d8ea10325fe45" + " " + "mt-4 p-3 bg-red-800/50 rounded-lg text-red-300",
                                        children: [
                                            "Error: ",
                                            error
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                        lineNumber: 315,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            !uploaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "jsx-9e7d8ea10325fe45" + " " + "mx-auto max-w-md bg-transparent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-9e7d8ea10325fe45" + " " + "space-y-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9e7d8ea10325fe45" + " " + "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "upload",
                                                type: "file",
                                                accept: "audio/*",
                                                onChange: handleUpload,
                                                required: true,
                                                className: "jsx-9e7d8ea10325fe45" + " " + "w-full h-12 opacity-0 cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 325,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg bg-transparent pointer-events-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-9e7d8ea10325fe45" + " " + "text-gray-200 opacity-80",
                                                    children: [
                                                        "Click to Choose a File",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-9e7d8ea10325fe45" + " " + "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 47
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 333,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                        lineNumber: 324,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                    lineNumber: 323,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                lineNumber: 322,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-9e7d8ea10325fe45" + " " + "mt-6",
                                children: !splitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-9e7d8ea10325fe45" + " " + "text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSplit,
                                        className: "jsx-9e7d8ea10325fe45" + " " + "px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded shadow hover:from-green-500 hover:to-blue-600 transition-all duration-300",
                                        children: "Split Audio"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                        lineNumber: 345,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                    lineNumber: 344,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-9e7d8ea10325fe45" + " " + "flex justify-center mt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9e7d8ea10325fe45" + " " + "flex items-center space-x-2 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "loader-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 355,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "loader-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 356,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "loader-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 357,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-9e7d8ea10325fe45",
                                                children: "Processing..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 358,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                        lineNumber: 354,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                    lineNumber: 353,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                lineNumber: 342,
                                columnNumber: 15
                            }, this),
                            uploaded && !splitting && vocalAudioURL && drumsAudioURL && guitarAudioURL && pianoAudioURL && bassAudioURL && otherAudioURL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-9e7d8ea10325fe45" + " " + "mt-10 space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9e7d8ea10325fe45" + " " + "p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "text-xl font-semibold mb-4 text-center",
                                                children: "Original Audio"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 369,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "flex items-center space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: toggleOriginalPlayPause,
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "play-button focus:outline-none",
                                                                children: isOriginalPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 375,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 374,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 379,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 378,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: originalVolume,
                                                                onChange: (e)=>handleOriginalVolumeChange(Number(e.target.value)),
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-400 appearance-none cursor-pointer slider-thumb rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 21
                                                    }, this),
                                                    isPlayingOriginal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "waveform mt-4 flex items-center justify-center gap-4",
                                                        children: [
                                                            ...Array(5)
                                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "bar"
                                                            }, i, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 54
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                        ref: originalAudioRef,
                                                        src: originalAudioURL,
                                                        onEnded: ()=>{
                                                            setIsPlayingOriginal(false);
                                                            setIsOriginalPaused(true);
                                                            setOriginalVolume(0);
                                                        },
                                                        className: "jsx-9e7d8ea10325fe45"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: originalAudioURL,
                                                            download: "original_audio.mp3",
                                                            className: "jsx-9e7d8ea10325fe45" + " " + "px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-5 w-5 mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 413,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 414,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Download Original"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 370,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                        lineNumber: 368,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9e7d8ea10325fe45" + " " + "p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "text-xl font-semibold mb-4 text-center",
                                                children: "Vocal Audio"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 424,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "flex items-center space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: toggleVocalPlayPause,
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "play-button focus:outline-none",
                                                                children: isVocalPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 430,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 429,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 434,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 433,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 427,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: vocalVolume,
                                                                onChange: (e)=>handleVocalVolumeChange(Number(e.target.value)),
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-400 appearance-none cursor-pointer slider-thumb rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 438,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 21
                                                    }, this),
                                                    isPlayingVocal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "waveform mt-4 flex items-center justify-center gap-4",
                                                        children: [
                                                            ...Array(5)
                                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "bar"
                                                            }, i, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 54
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                        ref: vocalAudioRef,
                                                        src: vocalAudioURL,
                                                        onEnded: ()=>{
                                                            setIsPlayingVocal(false);
                                                            setIsVocalPaused(true);
                                                            setVocalVolume(0);
                                                        },
                                                        className: "jsx-9e7d8ea10325fe45"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: vocalAudioURL,
                                                            download: "vocals.wav",
                                                            className: "jsx-9e7d8ea10325fe45" + " " + "px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-5 w-5 mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 468,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 469,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Download Vocals"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 425,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                        lineNumber: 423,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9e7d8ea10325fe45" + " " + "p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "text-xl font-semibold mb-4 text-center",
                                                children: "Drums Audio"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 479,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "flex items-center space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: toggleDrumsPlayPause,
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "play-button focus:outline-none",
                                                                children: isDrumsPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 485,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 484,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 489,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 488,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 482,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: drumsVolume,
                                                                onChange: (e)=>handleDrumsVolumeChange(Number(e.target.value)),
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-400 appearance-none cursor-pointer slider-thumb rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 493,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 21
                                                    }, this),
                                                    isPlayingDrums && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "waveform mt-4 flex items-center justify-center gap-4",
                                                        children: [
                                                            ...Array(5)
                                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "bar"
                                                            }, i, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 504,
                                                                columnNumber: 54
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 503,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                        ref: drumsAudioRef,
                                                        src: drumsAudioURL,
                                                        onEnded: ()=>{
                                                            setIsPlayingDrums(false);
                                                            setIsDrumsPaused(true);
                                                            setDrumsVolume(0);
                                                        },
                                                        className: "jsx-9e7d8ea10325fe45"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: drumsAudioURL,
                                                            download: "drums.wav",
                                                            className: "jsx-9e7d8ea10325fe45" + " " + "px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-5 w-5 mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 523,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 524,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 522,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Download Drums"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                            lineNumber: 517,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 516,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 480,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                        lineNumber: 478,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9e7d8ea10325fe45" + " " + "p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "text-xl font-semibold mb-4 text-center",
                                                children: "Guitar Audio"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 534,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "flex items-center space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: toggleGuitarPlayPause,
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "play-button focus:outline-none",
                                                                children: isGuitarPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 540,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 539,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 544,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 543,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: guitarVolume,
                                                                onChange: (e)=>handleGuitarVolumeChange(Number(e.target.value)),
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-400 appearance-none cursor-pointer slider-thumb rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 548,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 21
                                                    }, this),
                                                    isPlayingGuitar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "waveform mt-4 flex items-center justify-center gap-4",
                                                        children: [
                                                            ...Array(5)
                                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "bar"
                                                            }, i, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 559,
                                                                columnNumber: 54
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                        ref: guitarAudioRef,
                                                        src: guitarAudioURL,
                                                        onEnded: ()=>{
                                                            setIsPlayingGuitar(false);
                                                            setIsGuitarPaused(true);
                                                            setGuitarVolume(0);
                                                        },
                                                        className: "jsx-9e7d8ea10325fe45"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: guitarAudioURL,
                                                            download: "guitar.wav",
                                                            className: "jsx-9e7d8ea10325fe45" + " " + "px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-5 w-5 mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 578,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 579,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 577,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Download Guitar"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                            lineNumber: 572,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 571,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 535,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                        lineNumber: 533,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9e7d8ea10325fe45" + " " + "p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "text-xl font-semibold mb-4 text-center",
                                                children: "Piano Audio"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 589,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "flex items-center space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: togglePianoPlayPause,
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "play-button focus:outline-none",
                                                                children: isPianoPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 595,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 594,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 599,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 598,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 592,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: pianoVolume,
                                                                onChange: (e)=>handlePianoVolumeChange(Number(e.target.value)),
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-400 appearance-none cursor-pointer slider-thumb rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 603,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 21
                                                    }, this),
                                                    isPlayingPiano && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "waveform mt-4 flex items-center justify-center gap-4",
                                                        children: [
                                                            ...Array(5)
                                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "bar"
                                                            }, i, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 614,
                                                                columnNumber: 54
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 613,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                        ref: pianoAudioRef,
                                                        src: pianoAudioURL,
                                                        onEnded: ()=>{
                                                            setIsPlayingPiano(false);
                                                            setIsPianoPaused(true);
                                                            setPianoVolume(0);
                                                        },
                                                        className: "jsx-9e7d8ea10325fe45"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 617,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: pianoAudioURL,
                                                            download: "piano.wav",
                                                            className: "jsx-9e7d8ea10325fe45" + " " + "px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-5 w-5 mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 633,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 634,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 632,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Download Piano"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                            lineNumber: 627,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 590,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                        lineNumber: 588,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9e7d8ea10325fe45" + " " + "p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "text-xl font-semibold mb-4 text-center",
                                                children: "Bass Audio"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 644,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "flex items-center space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: toggleBassPlayPause,
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "play-button focus:outline-none",
                                                                children: isBassPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 650,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 649,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 654,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 653,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 647,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: bassVolume,
                                                                onChange: (e)=>handleBassVolumeChange(Number(e.target.value)),
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-400 appearance-none cursor-pointer slider-thumb rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 658,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 21
                                                    }, this),
                                                    isPlayingBass && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "waveform mt-4 flex items-center justify-center gap-4",
                                                        children: [
                                                            ...Array(5)
                                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "bar"
                                                            }, i, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 669,
                                                                columnNumber: 54
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 668,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                        ref: bassAudioRef,
                                                        src: bassAudioURL,
                                                        onEnded: ()=>{
                                                            setIsPlayingBass(false);
                                                            setIsBassPaused(true);
                                                            setBassVolume(0);
                                                        },
                                                        className: "jsx-9e7d8ea10325fe45"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 672,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: bassAudioURL,
                                                            download: "bass.wav",
                                                            className: "jsx-9e7d8ea10325fe45" + " " + "px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-5 w-5 mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 688,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 689,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 687,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Download Bass"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                            lineNumber: 682,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 681,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 645,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                        lineNumber: 643,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-9e7d8ea10325fe45" + " " + "p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "text-xl font-semibold mb-4 text-center",
                                                children: "Other (Strings/Pads) Audio"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 699,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-9e7d8ea10325fe45" + " " + "flex flex-col items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "flex items-center space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: toggleOtherPlayPause,
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "play-button focus:outline-none",
                                                                children: isOtherPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M5 3.5v17l14-8.5-14-8.5z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 705,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 704,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-12 w-12 text-blue-500",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z",
                                                                        className: "jsx-9e7d8ea10325fe45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                        lineNumber: 709,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 708,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 702,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: otherVolume,
                                                                onChange: (e)=>handleOtherVolumeChange(Number(e.target.value)),
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-400 appearance-none cursor-pointer slider-thumb rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 713,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 701,
                                                        columnNumber: 21
                                                    }, this),
                                                    isPlayingOther && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "waveform mt-4 flex items-center justify-center gap-4",
                                                        children: [
                                                            ...Array(5)
                                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-9e7d8ea10325fe45" + " " + "bar"
                                                            }, i, false, {
                                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                lineNumber: 724,
                                                                columnNumber: 54
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 723,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                                        ref: otherAudioRef,
                                                        src: otherAudioURL,
                                                        onEnded: ()=>{
                                                            setIsPlayingOther(false);
                                                            setIsOtherPaused(true);
                                                            setOtherVolume(0);
                                                        },
                                                        className: "jsx-9e7d8ea10325fe45"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 727,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-9e7d8ea10325fe45" + " " + "mt-6 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: otherAudioURL,
                                                            download: "strings_or_pads.wav",
                                                            className: "jsx-9e7d8ea10325fe45" + " " + "px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 20 20",
                                                                    className: "jsx-9e7d8ea10325fe45" + " " + "h-5 w-5 mr-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 743,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M7 10l3 3 3-3H9V4H7v6H4l3 3z",
                                                                            className: "jsx-9e7d8ea10325fe45"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                            lineNumber: 744,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                                    lineNumber: 742,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Download Other"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                            lineNumber: 737,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                        lineNumber: 736,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                                lineNumber: 700,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                        lineNumber: 698,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                                lineNumber: 366,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                        lineNumber: 306,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                    lineNumber: 305,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "9e7d8ea10325fe45",
                children: ".control-container.jsx-9e7d8ea10325fe45{background:linear-gradient(135deg,#1a1b26,#16161e);border-radius:12px;padding:1.5rem;box-shadow:0 8px 32px #0000001a}.waveform.jsx-9e7d8ea10325fe45{align-items:flex-end;gap:4px;width:fit-content;height:40px;margin:1rem auto 0;display:flex}.bar.jsx-9e7d8ea10325fe45{transform-origin:bottom;background:linear-gradient(#ec4899,#6366f1);border-radius:3px;width:120px;animation:.8s ease-in-out infinite pulse}.bar.jsx-9e7d8ea10325fe45:first-child{height:18px;animation-delay:.1s}.bar.jsx-9e7d8ea10325fe45:nth-child(2){height:22px;animation-delay:.2s}.bar.jsx-9e7d8ea10325fe45:nth-child(3){height:16px;animation-delay:.3s}.bar.jsx-9e7d8ea10325fe45:nth-child(4){height:24px;animation-delay:.4s}.bar.jsx-9e7d8ea10325fe45:nth-child(5){height:14px;animation-delay:.5s}@keyframes pulse{0%,to{transform:scaleY(.6)}50%{transform:scaleY(1.4)}}.loader-dot.jsx-9e7d8ea10325fe45{background:#ddd;border-radius:50%;width:10px;height:10px;animation:1s infinite alternate loader}@keyframes loader{to{background:#ec4899;transform:scale(1.5)}}.slider-thumb.jsx-9e7d8ea10325fe45::-webkit-slider-thumb{background:linear-gradient(45deg,#6366f1,#ec4899);border:2px solid #fff;width:16px;height:16px}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/services/PremiumSplitter/PremiumSplitterClient.tsx",
        lineNumber: 294,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/services/PremiumSplitter/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=app_services_PremiumSplitter_791bd6._.js.map