import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={heebo.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
