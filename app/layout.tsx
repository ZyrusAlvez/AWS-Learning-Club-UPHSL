import "../styles/globals.css";
import Footer from "@/component/Footer";
import Header from "@/component/Header"
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AWS Learning Club - UPHSL',
  description: 'Join the AWS Learning Club at University of Perpetual Help System Laguna. Learn cloud computing, AWS services, and build your tech skills.',
  keywords: ['AWS', 'Cloud Computing', 'UPHSL', 'Learning Club', 'Amazon Web Services'],
  icons: {
    icon: '/awslc logo.webp',
  },
  openGraph: {
    title: 'AWS Learning Club - UPHSL',
    description: 'Join the AWS Learning Club at University of Perpetual Help System Laguna',
    type: 'website',
  },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}