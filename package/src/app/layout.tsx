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
