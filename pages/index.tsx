import { Slide1 } from "../components/Slide1";
import { Slide2 } from "../components/Slide2";
import { useSlide } from "../utils/slideContext";
import tilt from "vanilla-tilt";
import { useEffect, useRef } from "react";
const IndexPage = () => {
  const slide = useSlide();
  const letter = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (letter.current)
      tilt.init(letter.current, {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        scale: 1.1,
      });
  }, [letter.current]);
  return (
    <div className={`relative w-screen h-screen overflow-hidden`}>
      <div
        className={`absolute top-0 left-0 w-screen h-screen z-30 transition-all duration-[2000ms] ${
          slide >= 3 && `-translate-y-[98%]`
        }`}
      >
        <Slide1 />
        <Slide2 />
      </div>
      <div
        className={`absolute top-0 left-0 w-screen h-screen bg-gradient-to-br from-teal-100 to-cyan-200 flex flex-col items-center justify-center gap-[25%] ${
          slide >= 3 && `!opacity-100`
        } opacity-0 transition-all duration-1000 delay-700`}
      >
        <div />
        <div
          className={`w-[30vw] h-[20vw] relative group z-4 cursor-pointer`}
          ref={letter}
        >
          <div
            className={`w-0 h-0 border-t-[10vw] border-l-[15vw] border-r-[15vw] border-solid border-l-transparent border-r-transparent border-indigo-400 transition-transform transform-none group-hover:rotate-x-160 absolute top-0 left-0 origin-top drop-shadow-md group-hover:drop-shadow-none group-hover:shadow-inner z-50 group-hover:z-40 rounded-lg group-hover:rounded-none duration-500`}
          ></div>
          <img
            src={"/TetHeart.png"}
            className={`w-24 h-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+8px)] z-[51] group-hover:z-30 group-hover:rotate-x-180 group-hover:top-[calc(-51%)] group-hover:left-[calc(50%-48px)] origin-center transition-all duration-500 rounded-full bg-gradient-to-br from-pink-300 to-green-200 p-1`}
          />
          <div
            className={`w-0 h-0 border-t-[10vw] border-l-[15vw] border-r-[15vw] border-solid border-l-transparent border-r-transparent border-indigo-300 absolute top-0 left-0 rounded-lg group-hover:rounded-none z-20`}
          />
          <div
            className={`w-0 h-0 border-l-[10vw] border-b-[15vw] border-t-[15vw] border-solid border-l-transparent border-r-transparent border-[rgb(142,153,242)] absolute top-0 left-0 z-50 rotate-90 origin-center translate-x-full -translate-y-1/3 `}
          />
          <div
            className={`w-0 h-0 border-r-[10vw] border-b-[15vw] border-t-[15vw] border-solid border-l-transparent border-r-transparent border-[rgb(142,153,242)] absolute bottom-0 left-0 z-50 rotate-90 origin-center translate-x-full translate-y-[calc(33%-1px)]`}
          />
          <div
            className={`w-full h-full bg-indigo-400/90 rounded-lg group-hover:rounded-t-none z-10 absolute top-0 left-0 shadow-lg shadow-blue-800/50`}
          />
          <div
            className={`w-0 h-0 border-b-[11.5vw] border-l-[15vw] border-r-[15vw] border-solid border-l-transparent border-r-transparent border-[rgb(130,142,234)] absolute bottom-0 left-0 rounded-lg z-[41]`}
          />
          <div
            className={`w-[90%] h-0 absolute top-1/2 left-1/2 -translate-x-1/2 bg-white z-40 drop-shadow-xl rounded-lg group-hover:h-[70%] group-hover:-translate-y-[100%] group-hover:delay-150  group-hover:duration-[400ms] duration-300 delay-none transition-all p-8 flex flex-col gap-4`}
          >
            <h1 className="text-4xl font-bold text-center font-dance">PROM?</h1>
          </div>
        </div>
        <span className={`absolute bottom-0 right-0 p-2 text-sm text-gray-800/40`}>
          Made with the time I was supposed to be spending studying for Physics final :D (Pls don&apos;t kill me)
        </span>
      </div>
    </div>
  );
};

export default IndexPage;
