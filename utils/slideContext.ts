import { createContext, useContext } from "react";

export const SlideContext = createContext(0);
export const useSlide = () => useContext(SlideContext);