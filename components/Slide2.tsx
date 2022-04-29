import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import Vara from "vara";
import { useSlide } from "../utils/slideContext";
let playing = false;
export const Slide2 = () => {
  const slide = useSlide();
  useEffect(() => {
    if (slide >= 2 && document.getElementById("slide1") && !playing) {
      playing = true;
      new Vara("#slide2", "font.json", [
        {
          text: "I love spending thyme with you", // String, text to be shown
          fontSize: 48, // Number, size of the text
          strokeWidth: 2, // Width / Thickness of the stroke
          color: "rgb(40, 40, 40)", // Color of the text
          id: "", // String or integer, for if animations are called manually or when using the get() method. Default is the index of the object.
          duration: 2000, // Number, Duration of the animation in milliseconds
          textAlign: "left", // String, text align, accepted values are left,center,right
          x: 5, // Number, x coordinate of the text
          y: 5, // Number, y coordinate of the text

          fromCurrentPosition: {
            // Whether the x or y coordinate should be from its calculated position, ie the position if x or y coordinates were not applied
            x: true, // Boolean
            y: true, // Boolean
          },
          autoAnimation: true, // Boolean, Whether to animate the text automatically
          queued: true, // Boolean, Whether the animation should be in a queue
          delay: 0, // Delay before the animation starts in milliseconds
          /* Letter spacing can be a number or an object, if number, the spacing will be applied to every character.
          If object, each letter can be assigned a different spacing as follows,
          letterSpacing: {
              a: 4,
              j: -6,
              global: -1
          }
          The global property is used to set spacing of all other characters
          */
          letterSpacing: 4,
        },
      ]);
    }
    // return () => {
    //   if (document.getElementById("slide1")) {
    //     document.getElementById("slide1").innerHTML = "";
    //   }
    // };
  }, [slide]);
  return (
    <div
      className={`w-screen h-screen flex flex-col justify-end absolute top-0 left-0`}
    >
      <div
        className={`bg-green-200 p-[8%] flex flex-row items-center h-1/2 max-h-full transition-all duration-500 relative flex-shrink-0`}
      >
        <div id="slide2" className={`p-2 overflow-visible w-full`}></div>
        <div className={`w-48 h-0 relative`}>
          <Transition
            show={slide >= 2}
            enter="transition ease-in duration-500 delay-[1500ms]"
            enterFrom="opacity-0 rotate-0"
            enterTo="opacity-100 rotate-45"
            leave="transition ease-out duration-500"
            leaveFrom="opacity-100 rotate-0"
            leaveTo="opacity-0 rotate-45"
            className={`absolute top-1/2 -translate-y-1/2 right-0 translate-x-2/3 rotate-[16deg]`}
          >
            <img
              src="thyme.png"
              className={`w-48 p-4 bg-green-300 rounded-md shadow-md `}
            />
          </Transition>
          <Transition
            show={slide >= 2}
            enter="transition ease-in duration-500 delay-[1500ms]"
            enterFrom="opacity-0 rotate-0"
            enterTo="opacity-100 rotate-45"
            leave="transition ease-out duration-500"
            leaveFrom="opacity-100 rotate-0"
            leaveTo="opacity-0 rotate-45"
            className={`absolute  top-1/2 -translate-y-1/2 -translate-x-1/3  -rotate-[16deg]`}
          >
            <img
              src="basil.png"
              className={`w-48 p-4 bg-green-300 rounded-md shadow-md `}
            />
          </Transition>
        </div>
      </div>
      <svg
        id="visual"
        viewBox="0 0 2000 200"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className={`w-full ${
          slide > 2 ? `max-h-full` : `max-h-0`
        } transition-all duration-500 absolute bottom-0 translate-y-full`}
      >
        <path
          d="M0 178L37 171.2C74 164.3 148 150.7 222 148.5C296 146.3 370 155.7 444.2 157.3C518.3 159 592.7 153 666.8 149.7C741 146.3 815 145.7 889 150C963 154.3 1037 163.7 1111 165.5C1185 167.3 1259 161.7 1333.2 163.2C1407.3 164.7 1481.7 173.3 1555.8 169.8C1630 166.3 1704 150.7 1778 153C1852 155.3 1926 175.7 1963 185.8L2000 196L2000 0L1963 0C1926 0 1852 0 1778 0C1704 0 1630 0 1555.8 0C1481.7 0 1407.3 0 1333.2 0C1259 0 1185 0 1111 0C1037 0 963 0 889 0C815 0 741 0 666.8 0C592.7 0 518.3 0 444.2 0C370 0 296 0 222 0C148 0 74 0 37 0L0 0Z"
          fill="#5eead4"
        ></path>
        <path
          d="M0 147L37 148.7C74 150.3 148 153.7 222 150C296 146.3 370 135.7 444.2 136.8C518.3 138 592.7 151 666.8 154.3C741 157.7 815 151.3 889 148.2C963 145 1037 145 1111 144.7C1185 144.3 1259 143.7 1333.2 145.8C1407.3 148 1481.7 153 1555.8 157.5C1630 162 1704 166 1778 160.8C1852 155.7 1926 141.3 1963 134.2L2000 127L2000 0L1963 0C1926 0 1852 0 1778 0C1704 0 1630 0 1555.8 0C1481.7 0 1407.3 0 1333.2 0C1259 0 1185 0 1111 0C1037 0 963 0 889 0C815 0 741 0 666.8 0C592.7 0 518.3 0 444.2 0C370 0 296 0 222 0C148 0 74 0 37 0L0 0Z"
          fill="#76edd1"
        ></path>
        <path
          d="M0 110L37 112.7C74 115.3 148 120.7 222 121.3C296 122 370 118 444.2 115.8C518.3 113.7 592.7 113.3 666.8 113.3C741 113.3 815 113.7 889 110C963 106.3 1037 98.7 1111 94.7C1185 90.7 1259 90.3 1333.2 95.8C1407.3 101.3 1481.7 112.7 1555.8 117.8C1630 123 1704 122 1778 124.5C1852 127 1926 133 1963 136L2000 139L2000 0L1963 0C1926 0 1852 0 1778 0C1704 0 1630 0 1555.8 0C1481.7 0 1407.3 0 1333.2 0C1259 0 1185 0 1111 0C1037 0 963 0 889 0C815 0 741 0 666.8 0C592.7 0 518.3 0 444.2 0C370 0 296 0 222 0C148 0 74 0 37 0L0 0Z"
          fill="#8af0d0"
        ></path>
        <path
          d="M0 80L37 83C74 86 148 92 222 93.5C296 95 370 92 444.2 87.5C518.3 83 592.7 77 666.8 79C741 81 815 91 889 94.2C963 97.3 1037 93.7 1111 89.3C1185 85 1259 80 1333.2 82.3C1407.3 84.7 1481.7 94.3 1555.8 95.5C1630 96.7 1704 89.3 1778 90.2C1852 91 1926 100 1963 104.5L2000 109L2000 0L1963 0C1926 0 1852 0 1778 0C1704 0 1630 0 1555.8 0C1481.7 0 1407.3 0 1333.2 0C1259 0 1185 0 1111 0C1037 0 963 0 889 0C815 0 741 0 666.8 0C592.7 0 518.3 0 444.2 0C370 0 296 0 222 0C148 0 74 0 37 0L0 0Z"
          fill="#9cf2cf"
        ></path>
        <path
          d="M0 61L37 58.2C74 55.3 148 49.7 222 48.8C296 48 370 52 444.2 53.2C518.3 54.3 592.7 52.7 666.8 52.3C741 52 815 53 889 55.3C963 57.7 1037 61.3 1111 62.5C1185 63.7 1259 62.3 1333.2 59.2C1407.3 56 1481.7 51 1555.8 52.8C1630 54.7 1704 63.3 1778 64.2C1852 65 1926 58 1963 54.5L2000 51L2000 0L1963 0C1926 0 1852 0 1778 0C1704 0 1630 0 1555.8 0C1481.7 0 1407.3 0 1333.2 0C1259 0 1185 0 1111 0C1037 0 963 0 889 0C815 0 741 0 666.8 0C592.7 0 518.3 0 444.2 0C370 0 296 0 222 0C148 0 74 0 37 0L0 0Z"
          fill="#acf5cf"
        ></path>
        <path
          d="M0 44L37 44.7C74 45.3 148 46.7 222 44.3C296 42 370 36 444.2 32.2C518.3 28.3 592.7 26.7 666.8 25.5C741 24.3 815 23.7 889 25.2C963 26.7 1037 30.3 1111 32.7C1185 35 1259 36 1333.2 38C1407.3 40 1481.7 43 1555.8 42.5C1630 42 1704 38 1778 32.5C1852 27 1926 20 1963 16.5L2000 13L2000 0L1963 0C1926 0 1852 0 1778 0C1704 0 1630 0 1555.8 0C1481.7 0 1407.3 0 1333.2 0C1259 0 1185 0 1111 0C1037 0 963 0 889 0C815 0 741 0 666.8 0C592.7 0 518.3 0 444.2 0C370 0 296 0 222 0C148 0 74 0 37 0L0 0Z"
          fill="#bbf7d0"
        ></path>
      </svg>
    </div>
  );
};
