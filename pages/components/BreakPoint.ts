// const viewport = useBreakPoint()
// this is a hook which listens to viewport changes and returns true for screens less than 
// 700px and false for screens greater than 700px

import { useState, useEffect } from "react";

const debounce = require("lodash/debounce");

// helper function to translate the size to string of xs sm md lg
const helper = (arg: number | undefined) => {
  return arg?
  () => {
    if (arg < 800) {
    return true
    } else {
      return false
    }
  }
  :
  undefined
};

// Hook to monitor viewport size
export function useBreakPoint() {
  const [BreakPoint, setBreakPoint] = useState<
  true | false | undefined
  >(undefined);

  useEffect(() => {
    setBreakPoint(helper(window.innerWidth))

    if (typeof window !== "object") {
      return;
    }

    const handleResize = () => {
      setBreakPoint(helper(window.innerWidth));
    };

    window.addEventListener("resize", debounce(handleResize, 500));

    return () => {
      window.removeEventListener("resize", debounce(handleResize, 500));
    };
  }, []);

  return BreakPoint;
}
