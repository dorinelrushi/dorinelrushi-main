import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Script from 'next/script';
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Innovation",
  description: "Next Js Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

     
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-648F50051B" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-648F50051B');
            `,
          }}
        />
  
      <body className={inter.className}>
        <div>
        <Header />
          </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
