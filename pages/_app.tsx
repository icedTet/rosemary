import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import "../styles/globals.css";
import { SlideContext } from "../utils/slideContext";
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
function MyApp({ Component, pageProps }: AppProps) {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    (async () => {
      await sleep(1000);
      setSlide(1);
      await sleep(3000);
      setSlide(2);
      await sleep(7000);
      setSlide(3);
    })();
  }, []);
  return (
    <SlideContext.Provider value={slide}>
      <div className={`w-screen h-screen ${slide !== 0 && `-translate-y-full`} bg-gray-800 absolute top-0 left-0 z-50 transition-all duration-500`} />
      <Component {...pageProps} />
    </SlideContext.Provider>
  );
}

export default MyApp;
