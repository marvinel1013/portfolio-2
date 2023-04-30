import Head from "next/head";
import { BarLoader } from "react-spinners";

function SplashScreen() {
  return (
    <>
      <Head>
        <title>Marvinel Santos Portfolio</title>
      </Head>
      <div className="w-full h-screen bg-[#f5f5f5] flex flex-col justify-center gap-2 items-center">
        <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold">
          Marvinel Portfolio
        </h2>
        <div className="flex items-center justify-center">
          <BarLoader color="black" width={230} speedMultiplier={0.5} />
        </div>
      </div>
    </>
  );
}

export default SplashScreen;
