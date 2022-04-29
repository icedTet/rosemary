import { Slide1 } from "../components/Slide1";
import { Slide2 } from "../components/Slide2";
import { useSlide } from "../utils/slideContext";

const IndexPage = () => {
  const slide = useSlide();
  return (
    <>
      <div
        className={`absolute top-0 left-0 w-screen h-screen z-30 transition-all duration-[2000ms] ${
          slide >= 3 && `-translate-y-[98%]`
        }`}
      >
        <Slide1 />
        <Slide2 />
      </div>
      <div
        className={`absolute top-0 left-0 w-screen h-screen bg-teal-100 flex flex-row items-end justify-center p-[8%] ${
          slide >= 3 && `!opacity-100`
        } opacity-0 transition-all duration-1000 delay-700`}
      >
        <div className={`w-[30vw] h-[20vw] relative group z-40`}>
          <div
            className={`w-0 h-0 border-t-[10vw] border-l-[15vw] border-r-[15vw] border-solid border-l-transparent border-r-transparent border-indigo-400 transition-transform transform-none group-hover:rotate-x-160 absolute top-0 left-0 origin-top drop-shadow-md group-hover:drop-shadow-none z-50 group-hover:z-40 rounded-lg group-hover:rounded-none`}
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
            className={`w-full h-full bg-indigo-400/90 rounded-lg group-hover:rounded-t-none z-10 absolute top-0 left-0`}
          />
          <div
            className={`w-0 h-0 border-b-[11.5vw] border-l-[15vw] border-r-[15vw] border-solid border-l-transparent border-r-transparent border-[rgb(130,142,234)] absolute bottom-0 left-0 rounded-lg group-hover:rounded-none z-50`}
          />
          <div
            className={`w-[90%] h-0 absolute top-1/2 left-1/2 -translate-x-1/2 bg-white z-40 drop-shadow-lg rounded-lg group-hover:h-full group-hover:-translate-y-full transition-all p-8`}
          >
            <h1 className="text-4xl font-bold text-center font-dance">PROM?</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
