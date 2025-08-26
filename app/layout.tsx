import "../styles/globals.css";
import Header from '../component/Header'

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}