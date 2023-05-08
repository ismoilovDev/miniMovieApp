import { useState, useEffect } from "react";

function useWindowSize() {
   const [windowSize, setWindowSize] = useState(window.innerWidth);

   useEffect(() => {
      function handleResize() {
         setWindowSize(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, [windowSize]);

   return windowSize;
}

export default useWindowSize;