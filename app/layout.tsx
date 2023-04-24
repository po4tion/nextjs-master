import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "With App directory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className="m-0 bg-slate-600 text-white h-full">
        <nav className="flex gap-5 text-cyan-400 justify-center text-lg">
          <Link href="/">홈</Link>

          <Link href="/list">List</Link>

          <Link href="/cart">Cart</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
