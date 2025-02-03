import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Innovation",
  description: "Next Js Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
