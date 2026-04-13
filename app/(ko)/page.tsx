import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";

const SITE_DESC = process.env.NEXT_PUBLIC_SITE_DESC ?? "라이프스타일·여행·문화 트렌드를 소개합니다.";

export default function Home() {
  const allPosts = getAllPosts("ko");
  const featured = allPosts[0];
  const restPosts = allPosts.slice(1, 5);

  return (
    <div>
      {/* 에디토리얼 히어로 */}
      <section style={{ borderBottom: "2px solid #FDE8D0" }} className="mb-12 pb-10">
        <div style={{ color: "var(--color-primary)", fontStyle: "italic" }} className="text-sm text-center mb-8 tracking-wider">
          — 오늘의 라이프스타일 —
        </div>
        {featured ? (
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {featured.image && (
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div style={{ background: "linear-gradient(to top, rgba(249,115,22,0.3), transparent)" }} className="absolute inset-0" />
                </div>
              )}
              <div>
                <span style={{ backgroundColor: "var(--color-primary)", color: "#fff" }} className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">FEATURED</span>
                <h1 style={{ color: "#1C1917" }} className="text-3xl font-black mt-4 mb-3 leading-tight group-hover:text-orange-500 transition-colors">{featured.title}</h1>
                <p style={{ color: "#78716C" }} className="text-sm leading-relaxed mb-4 line-clamp-3">{featured.description}</p>
                <span style={{ color: "var(--color-primary)" }} className="text-sm font-semibold">읽기 →</span>
              </div>
            </div>
          </Link>
        ) : (
          <div className="text-center py-16">
            <p style={{ color: "#A8A29E" }} className="italic">{SITE_DESC}</p>
            <a href="/blog" style={{ backgroundColor: "var(--color-primary)", color: "#fff" }} className="inline-block mt-4 px-6 py-2.5 rounded-full text-sm font-semibold">전체 글 보기 →</a>
          </div>
        )}
      </section>

      {/* 2열 그리드 - 나머지 글 */}
      {restPosts.length > 0 && (
        <section>
          <div className="flex items-center gap-4 mb-7">
            <div style={{ height: "1px", flex: 1, backgroundColor: "#FDE8D0" }} />
            <h2 style={{ color: "#1C1917" }} className="font-black text-sm tracking-widest uppercase">MORE STORIES</h2>
            <div style={{ height: "1px", flex: 1, backgroundColor: "#FDE8D0" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {restPosts.map(post => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  {post.image && (
                    <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden mb-4">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  )}
                  <h3 style={{ color: "#1C1917" }} className="font-bold text-base mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">{post.title}</h3>
                  <p style={{ color: "#78716C" }} className="text-xs line-clamp-2 mb-2">{post.description}</p>
                  <time style={{ color: "#A8A29E" }} className="text-xs italic">{new Date(post.publishedAt).toLocaleDateString("ko-KR")}</time>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
