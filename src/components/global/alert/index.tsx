"use client";

import { InventoryContext } from "@/context/InventoryContext";
import gsap, { Expo } from "gsap";
import { useContext, useEffect, useRef, useState } from "react";

const Alert = () => {
  const container = useRef(null);
  const { showMessage, setShowMessage, message } = useContext(InventoryContext);
  const tl = useRef(gsap.timeline());
  const [isMounted, setIsMounted] = useState(false); // Track client-side mounting

  // Mark as mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const ctx = gsap.context(() => {
        gsap.set(".messageBox", { y: -95 });

        tl.current = gsap.timeline({
          paused: true,
        });

        tl.current.to(".messageBox", {
          y: 30,
          duration: 1,
          ease: Expo.easeOut,
        });

        tl.current.to(".messageBox", {
          y: -95,
          duration: 1,
          ease: Expo.easeOut,
          delay: 3,
          onComplete: () => {
            setShowMessage(false);
            tl.current.time(0);
            tl.current.pause();
          },
        });
      }, container);

      return () => ctx.revert(); // Clean up GSAP context
    }
  }, [isMounted, setShowMessage]);

  useEffect(() => {
    if (showMessage && isMounted) {
      tl.current.play();
    }
  }, [showMessage, isMounted]);

  // Avoid rendering on the server to prevent hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`w-full h-[5px] fixed top-0 left-0 z-[9999] cursor-default select-none ${
        showMessage ? "pointer-events-auto" : "pointer-events-none"
      }`}
      ref={container}
    >
      <div className="relative">
        <div
          className={`min-w-fit rounded-10 absolute left-1/2 transform -translate-x-1/2 flex flex-col lg:flex-row items-center gap-10 justify-between px-50 py-15 messageBox bg-[#fff] shadow-md`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#02C92E" />
            <path
              d="M9.23369 12.9816C9.07938 12.9816 8.93046 12.9197 8.82191 12.8111L6.1709 10.1601C5.94303 9.93225 5.94303 9.56264 6.1709 9.33567C6.39877 9.1078 6.76749 9.1078 6.99536 9.33567L9.23458 11.5749L13.6377 7.1709C13.8655 6.94303 14.2352 6.94303 14.463 7.1709C14.6909 7.39877 14.6909 7.76749 14.463 7.99536L9.64726 12.812C9.53691 12.9188 9.38799 12.9816 9.23369 12.9816Z"
              fill="white"
            />
          </svg>

          <span className="text-20">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
