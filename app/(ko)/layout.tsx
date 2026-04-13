import type { Metadata } from "next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "라이프인사이트";
const SITE_DESC = process.env.NEXT_PUBLIC_SITE_DESC ?? "라이프스타일·여행·문화 트렌드를 소개합니다.";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3336";

export const metadata: Metadata = {
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESC,
  openGraph: { siteName: SITE_NAME, locale: "ko_KR", url: SITE_URL },
};

export default function KoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header style={{ backgroundColor: "#FFFBF5", borderBottom: "1px solid #FDE8D0" }} className="sticky top-0 backdrop-blur z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          {/* 센터 정렬 매거진 헤더 */}
          <div className="flex items-center justify-between">
            <LanguageSwitcher currentLang="ko" />
            <a href="/" className="text-center">
              <div style={{ color: "var(--color-primary)", fontStyle: "italic" }} className="text-xs tracking-widest mb-0.5">Life · Travel · Culture</div>
              <div style={{ color: "#1C1917" }} className="text-2xl font-black tracking-tight">라이프인사이트</div>
            </a>
            <nav className="flex gap-5 text-sm" style={{ color: "#78716C" }}>
              <a href="/" className="hover:text-orange-500 transition-colors">홈</a>
              <a href="/blog" className="hover:text-orange-500 transition-colors">전체글</a>
            </nav>
          </div>
        </div>
        <div style={{ height: "2px", background: "linear-gradient(90deg, var(--color-primary), #FBBF24, var(--color-primary))" }} />
      </header>
      <main className="max-w-5xl mx-auto px-6 py-10 min-h-[80vh]">
        {children}
      </main>
      <footer style={{ backgroundColor: "#FFF7ED", borderTop: "1px solid #FDE8D0" }} className="mt-20 py-10 text-center">
        <div style={{ color: "var(--color-primary)", fontStyle: "italic" }} className="text-xs tracking-widest mb-1">Life · Travel · Culture</div>
        <div style={{ color: "#1C1917" }} className="font-black text-lg mb-2">라이프인사이트</div>
        <p style={{ color: "#78716C" }} className="text-xs mb-3">© {new Date().getFullYear()} 라이프인사이트. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          <a href="/privacy" style={{ color: "#A8A29E" }} className="text-xs hover:text-orange-500 transition-colors">개인정보처리방침</a>
          <a href="/terms" style={{ color: "#A8A29E" }} className="text-xs hover:text-orange-500 transition-colors">이용약관</a>
        </div>
      </footer>
    </>
  );
}
