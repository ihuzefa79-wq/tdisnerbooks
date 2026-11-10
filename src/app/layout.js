import { Kaushan_Script, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Cursor } from "@/components/Effects";

const script = Kaushan_Script({ subsets: ["latin"], weight: "400", variable: "--f-script" });
const sans = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--f-sans" });
const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--f-serif",
});

export const metadata = {
  title: "What's A QuiZnos? | Todd C. Disner",
  description:
    "The Entrepreneurial Story of America's Hottest Sub Chain. A true story of vision, hard work and success by Todd C. Disner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${script.variable} ${sans.variable} ${serif.variable}`}>
      <body>
        <Loader />
        <SmoothScroll />
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
