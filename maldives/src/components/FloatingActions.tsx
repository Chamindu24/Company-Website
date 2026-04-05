import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";



function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.dispatchEvent(new Event("lenis-scroll-to-top"));
  };

  return (
    <div className="fixed bottom-4 right-4 z-[110] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">



      {/* Scroll To Top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Go to top"
        className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center border border-[#26AEBF] justify-center rounded-full bg-white text-[#26AEBF] shadow-[0_10px_25px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#26AEBF] hover:text-white hover:shadow-[0_15px_35px_rgba(38,174,191,0.35)] active:scale-95 ${
          showScrollTop
            ? "opacity-100"
            : "pointer-events-none opacity-0 translate-y-3"
        }`}
      >
        <FaArrowUp className="text-lg" />
      </button>
    </div>
  );
}

export default FloatingActions;