import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import SplashScreen from "@/components/SplashScreen";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Heebo } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);

  return (
    <div className={heebo.className}>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
          <Footer />
        </>
      )}
    </div>
  );
}
