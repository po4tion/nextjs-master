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
    <html lang="ko">
      <body className="m-0 bg-slate-600 text-white">{children}</body>
    </html>
  );
}
