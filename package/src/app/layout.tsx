import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Providers } from "@/components/providers";
import SmoothScroll from "@/components/smooth-scroll";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Denzel Mabilangan Resume",
  description: "Computer Science Student at Towson University excited to solve real world problems and bring ideas to life",
  openGraph: {
    title: "Denzel Mabilangan - Software Developer",
    description: "Computer Science Student at Towson University excited to solve real world problems and bring ideas to life",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1920,
        height: 1078,
        alt: "Denzel Mabilangan - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denzel Mabilangan - Software Developer",
    description: "Computer Science Student at Towson University excited to solve real world problems and bring ideas to life",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <SmoothScroll>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </SmoothScroll>
      </body>
    </html>
  );
}
