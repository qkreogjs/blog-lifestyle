import type { Metadata } from "next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const SITE_NAME = "ライフインサイト";
const SITE_DESC = "ライフスタイル・旅行・文化トレンド";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3336";

export const metadata: Metadata = {
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESC,
  openGraph: { siteName: SITE_NAME, locale: "ja_JP", url: SITE_URL },
};

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header style={{ backgroundColor: "#FFFBF5", borderBottom: "1px solid #FDE8D0" }} className="sticky top-0 backdrop-blur z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          {/* センター揃えマガジンヘッダー */}
          <div className="flex items-center justify-between">
            <LanguageSwitcher currentLang="ja" />
            <a href="/ja" className="text-center">
              <div style={{ color: "var(--color-primary)", fontStyle: "italic" }} className="text-xs tracking-widest mb-0.5">ライフ · 旅行 · カルチャー</div>
              <div style={{ color: "#1C1917" }} className="text-2xl font-black tracking-tight">ライフインサイト</div>
            </a>
            <nav className="flex gap-5 text-sm" style={{ color: "#78716C" }}>
              <a href="/ja" className="hover:text-orange-500 transition-colors">ホーム</a>
              <a href="/ja/blog" className="hover:text-orange-500 transition-colors">全記事</a>
            </nav>
          </div>
        </div>
        <div style={{ height: "2px", background: "linear-gradient(90deg, var(--color-primary), #FBBF24, var(--color-primary))" }} />
      </header>
      <main className="max-w-5xl mx-auto px-6 py-10 min-h-[80vh]">
        {children}
      </main>
      <footer style={{ backgroundColor: "#FFF7ED", borderTop: "1px solid #FDE8D0" }} className="mt-20 py-10 text-center">
        <div style={{ color: "var(--color-primary)", fontStyle: "italic" }} className="text-xs tracking-widest mb-1">ライフ · 旅行 · カルチャー</div>
        <div style={{ color: "#1C1917" }} className="font-black text-lg mb-2">ライフインサイト</div>
        <p style={{ color: "#78716C" }} className="text-xs mb-3">© {new Date().getFullYear()} ライフインサイト. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          <a href="/ja/privacy" style={{ color: "#A8A29E" }} className="text-xs hover:text-orange-500 transition-colors">プライバシーポリシー</a>
          <a href="/ja/terms" style={{ color: "#A8A29E" }} className="text-xs hover:text-orange-500 transition-colors">利用規約</a>
        </div>
      </footer>
    </>
  );
}
