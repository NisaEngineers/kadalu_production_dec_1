// app/blogs/page.tsx
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/ui/footer";

// Blog posts data (can be moved to CMS or API later)
const posts = [
  {
    id: 1,
    title: "The Future of Music Production with AI",
    description:
      "Discover how AI and advanced data analysis are reshaping the music industry. From smart vocal removal to intricate chord extractions, learn how Monaarch empowers your musical creativity.",
    image: "/images/blog1.jpg",
    date: "October 1, 2023",
    slug: "future-music-ai",
  },
  {
    id: 2,
    title: "Revolutionizing Audio Separation: Monaarch's Innovations",
    description:
      "Explore the groundbreaking techniques behind Monaarch's advanced audio separation tools. Unveil how our stem splitting and vocal isolation methods transform professional music production.",
    image: "/images/blog2.jpg",
    date: "September 15, 2023",
    slug: "audio-separation-innovations",
  },
  {
    id: 3,
    title: "Harmonizing Creativity and Technology",
    description:
      "Dive into the dynamic fusion of art and cutting-edge science. See how Monaarch’s machine learning-driven mastering, chord extraction, and audio editing tools empower creators to innovate.",
    image: "/images/blog3.jpg",
    date: "September 1, 2023",
    slug: "creativity-technology-harmony",
  },
] as const;

export default function BlogsPage() {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold text-indigo-600 mb-4">
              Latest Blogs
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, updates, and deep dives into AI-powered music production.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-56 bg-gradient-to-br from-indigo-100 to-purple-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={post.id === 1}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10" />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <time className="text-sm text-indigo-600 font-medium mb-2">
                    {post.date}
                  </time>
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {post.description}
                  </p>

                  <div className="flex justify-between items-center mt-auto">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center gap-1"
                    >
                      Read More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// Optional: Generate static params for dynamic routes (if you add blog/[slug])
// export async function generateStaticParams() {
//   return posts.map((post) => ({ slug: post.slug }));
// }
