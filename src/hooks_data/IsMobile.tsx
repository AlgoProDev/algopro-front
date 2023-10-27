"use client";
import { useState, useEffect } from "react";

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 480);

      const handleResize = () => {
        setIsMobile(window.innerWidth <= 480);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return isMobile;
}

export default useIsMobile;
