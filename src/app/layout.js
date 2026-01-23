// import "./globals.css";



export const metadata = {
  title: "minimal portfolio",
  description: "supabase 활용 포트폴리오 사이트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
