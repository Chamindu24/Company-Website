import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

type HeroSlide = {
  id: string;
  titleTop: string;
  titleHighlight: string;
  titleOutline: string;
  description: string;
  image: string;
};

const heroSlides: HeroSlide[] = [
  {
    id: "01",
    titleTop: "Customer ",
    titleHighlight: "Relationship",
    titleOutline: "Management.",
    description:
      "Powerful CRM platforms designed to strengthen customer engagement, automate workflows, and scale relationships.",
    image: "/hero/crm.jpg",
  },
  {
    id: "02",
    titleTop: "AI Agents &",
    titleHighlight: "AI Chatbots",
    titleOutline: "Solutions.",
    description:
      "Intelligent AI agents and chatbots that automate support, sales, and internal operations with precision.",
    image: "/hero/chat.png",
  },
  {
    id: "03",
    titleTop: "Business",
    titleHighlight: "Process",
    titleOutline: "Management.",
    description:
      "Streamline operations with BPM systems built for efficiency, visibility, and long-term growth.",
    image: "/hero/bm.jpg",
  },
  {
    id: "04",
    titleTop: "Business &",
    titleHighlight: "Corporate",
    titleOutline: "Websites.",
    description:
      "High-end corporate websites crafted to communicate trust, clarity, and brand authority.",
    image: "/hero/bc.jpg",
  },
  {
    id: "05",
    titleTop: "Mobile",
    titleHighlight: "Applications",
    titleOutline: "Development.",
    description:
      "Scalable iOS and Android applications engineered for performance and user experience.",
    image: "/hero/app.jpg",
  },
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        slidesPerView={1}
        loop={true}
        className="h-full w-full hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full px-6 lg:px-20 flex flex-col justify-center z-10 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center">
                <div className="lg:col-span-8 flex flex-col">
                  <h1 className="flex flex-col gap-0 select-none">
                    <span className="text-7xl md:text-8xl lg:text-[8rem] font-black text-transparent   uppercase leading-[0.8] tracking-tighter"
                        style={{ WebkitTextStroke: "2px #1c1917" }}                >
                      {slide.titleTop}
                    </span>
                    <span className="text-7xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-stone-900 uppercase leading-[0.8] mb-1">
                      {slide.titleHighlight}
                    </span>
                    
                    <span className="text-7xl md:text-8xl lg:text-[8rem] font-black text-emerald-600  uppercase leading-[0.8] tracking-tighter "
                      style={{ WebkitTextStroke: "2px #1c1917" }}
                    >
                      {slide.titleOutline}
                    </span>
                  </h1>
                </div>

                <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right mt-16 lg:mt-0">
                  <div className="max-w-md flex flex-col lg:items-end">
                    <div className="relative mb-12 lg:pr-0">
                    <p className="text-stone-800 text-2xl md:text-3xl  leading-relaxed max-w-2xl  pb-2">
                        {slide.description}
                    </p>
                      <div className="mt-6 h-[2px] w-20 bg-emerald-800 ml-auto hidden lg:block"></div>
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-col gap-6 w-full lg:w-max">
                      <button
                        onClick={() => navigate("/contact")}
                        className="group relative rounded-full px-12 py-6 bg-stone-900 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105"
                      >
                        <span className="relative z-10 text-[14px] font-bold tracking-[0.3em] uppercase text-white">
                          Start Your Project
                        </span>
                        <div className="absolute inset-0 bg-emerald-700 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-swiper .swiper-slide {
          opacity: 0;
          transition: opacity 600ms ease;
        }
        .hero-swiper .swiper-slide-active {
          opacity: 1;
        }
        .swiper-pagination-bullets {
          bottom: 10% !important;
        }
        .swiper-pagination-bullet {
          background: #d6d3d1 !important;
          opacity: 1 !important;
          margin: 0 10px !important;
        }
        .swiper-pagination-bullet-active {
          background: #065f46 !important;
          transform: scale(1.5);
        }
      `}</style>
    </section>
  );
}
