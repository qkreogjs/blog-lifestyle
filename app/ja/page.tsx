import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";

const SITE_DESC = "ライフスタイル・旅行・文化トレンド";

export default function Home() {
  const allPosts = getAllPosts("ja");
  const featured = allPosts[0];
  const restPosts = allPosts.slice(1, 5);

  return (
    <div>
      {/* エディトリアルヒーロー */}
      <section style={{ borderBottom: "2px solid #FDE8D0" }} className="mb-12 pb-10">
        <div style={{ color: "var(--color-primary)", fontStyle: "italic" }} className="text-sm text-center mb-8 tracking-wider">
          — 今日のライフスタイル —
        </div>
        {featured ? (
          <Link href={`/ja/blog/${featured.slug}`} className="group block">
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
                <span style={{ color: "var(--color-primary)" }} className="text-sm font-semibold">続きを読む →</span>
              </div>
            </div>
          </Link>
        ) : (
          <div className="text-center py-16">
            <p style={{ color: "#A8A29E" }} className="italic">{SITE_DESC}</p>
            <a href="/ja/blog" style={{ backgroundColor: "var(--color-primary)", color: "#fff" }} className="inline-block mt-4 px-6 py-2.5 rounded-full text-sm font-semibold">全記事を見る →</a>
          </div>
        )}
      </section>

      {/* 2カラムグリッド - その他の記事 */}
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
                <Link href={`/ja/blog/${post.slug}`}>
                  {post.image && (
                    <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden mb-4">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  )}
                  <h3 style={{ color: "#1C1917" }} className="font-bold text-base mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">{post.title}</h3>
                  <p style={{ color: "#78716C" }} className="text-xs line-clamp-2 mb-2">{post.description}</p>
                  <time style={{ color: "#A8A29E" }} className="text-xs italic">{new Date(post.publishedAt).toLocaleDateString("ja-JP")}</time>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
