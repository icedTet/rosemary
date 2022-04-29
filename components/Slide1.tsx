import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import Vara from "vara";
import { useSlide } from "../utils/slideContext";
let playing = false;
export const Slide1 = () => {
  const slide = useSlide();
  useEffect(() => {
    if (slide >= 1 && document.getElementById("slide1") && !playing) {
      playing = true;
      new Vara("#slide1", "font.json", [
        {
          text: "I'm not going to beat around the rosemary bush here...", // String, text to be shown
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
      className={`w-screen h-screen absolute top-0 left-0 z-10 flex flex-col`}
    >
      <div className={`w-full relative`}>
        <div
          className={`bg-orange-200 p-[8%] flex flex-row items-center h-screen ${
            slide <= 1 ? `max-h-full` : `max-h-[50vh]`
          } transition-all duration-500 delay-300 relative flex-shrink-0`}
        >
          <div id="slide1" className={`p-2 overflow-visible w-full`}></div>
          <Transition
            show={slide >= 1}
            enter="transition ease-in duration-500 delay-[1500ms]"
            enterFrom="opacity-0 rotate-0"
            enterTo="opacity-100 rotate-12"
            leave="transition ease-out duration-500"
            leaveFrom="opacity-100 rotate-0"
            leaveTo="opacity-0 rotate-12"
            className={`rotate-12`}
          >
            <img
              src="rosemary.png"
              className={`w-48 p-4 bg-orange-300 rounded-md shadow-md `}
            />
          </Transition>
        </div>
      </div>
    </div>
  );
};
