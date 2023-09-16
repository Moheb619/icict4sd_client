"use client";
import { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";
export default function MoveToTopButton() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScrollButton && (
        <div className="text-white bg-black text-4xl fixed bottom-3 right-3 py-1 px-2 cursor-pointer rounded">
          <BiArrowToTop className="scroll-button" onClick={scrollToTop} />
        </div>
      )}
    </>
  );
}
