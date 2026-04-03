import { motion, useScroll, useTransform } from "framer-motion";

function LandingHeroSection() {
  const { scrollY } = useScroll();

  const bgScale = useTransform(scrollY, [0, 1000], [1, 1]);
  const fgScale = useTransform(scrollY, [0, 1000], [1, 1.3]);
  const textOpacity = useTransform(scrollY, [0, 400], [0.8, 0]);
  const brandMoveX = useTransform(scrollY, [0, 500], [0, -260]);
  const headingBlur = useTransform(
    scrollY,
    [0, 450],
    ["blur(1px)", "blur(6px)"],
  );

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030303]">
      {/* TOP GRADIENT */}
      <div className="absolute top-0 left-0 w-full z-50 pointer-events-none">
        <div className="h-64 w-full bg-gradient-to-b from-white to-transparent" />
      </div>

      {/* BOTTOM GRADIENT */}
      <div className="absolute bottom-0 left-0 w-full z-50 pointer-events-none">
        <div className="h-10 w-full bg-gradient-to-t from-white/90 to-transparent" />
      </div>

      {/* BACKGROUND */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0">
        <img
          className="h-full w-full brightness-[0.75]"
          src="/work/herobg.webp"
          alt="Maldives Horizon"
        />
      </motion.div>

      {/* BRAND TEXT */}
      <motion.div
        style={{ opacity: textOpacity, x: brandMoveX, filter: "blur(3px)" }}
        className="absolute top-52 left-0 sm:top-32 sm:left-16 md:top-56 lg:top-32 md:left-2 lg:left-24 z-10 p-3 sm:p-4 md:p-6 pointer-events-none"
      >
        <motion.h1
          initial={{ letterSpacing: "1em", opacity: 0 }}
          animate={{ letterSpacing: "-0.05em", opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[16vw] sm:text-[10vw] md:text-[16vw] lg:text-[9vw] font-extrabold leading-none tracking-tighter text-white select-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)]"
        >
          LUSHWARE
        </motion.h1>
      </motion.div>

      {/* FOREGROUND */}
      <motion.div
        style={{ scale: fgScale }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <img
          className="h-full w-full brightness-[0.75]"
          src="/work/herobgremoved.webp"
          alt="Foreground villas"
        />
      </motion.div>

      {/* UI CONTENT */}
      <div className="absolute inset-0 z-30 flex flex-col justify-end pb-24 px-8 lg:px-2 sm:p-8 md:py-28 lg:py-10">
        {/* BOTTOM CONTENT */}
        <div className="flex flex-col md:flex-row mb-6 sm:mb-8 md:mb-12 items-end justify-end gap-6 md:gap-12">
          <div className="max-w-5xl w-full">
            <motion.h2
              style={{
                transformStyle: "preserve-3d",
                perspective: "1200px",
                textShadow: `
      0px 10px 10px rgba(0,0,0,0.7),
      0px 12px 24px rgba(0,0,0,0.035),
      0px 24px 48px rgba(0,0,0,0.02)
    `,
                filter: headingBlur,
              }}
              initial={{ y: -500, opacity: 0, rotateX: 45, z: -300 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0, z: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                damping: 14,
                stiffness: 80,
                mass: 2,
                delay: 0.8,
              }}
              className="text-[13vw] sm:text-[8vw] md:text-8xl lg:text-8xl font-bold tracking-tight  text-white leading-[1.05] lg:leading-[0.9] select-none"
            >
              <motion.span
                initial={{ opacity: 0, y: -20, filter: "blur(16px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: 1.0,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: "inline-block" }}
              >
                Smart Digital&nbsp;
              </motion.span>
              <motion.span
                className="text-white"
                initial={{ opacity: 0, y: -20, filter: "blur(20px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: 1.15,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: "inline-block" }}
              >
                Solutions
              </motion.span>

              <br />

              <motion.span
                initial={{ opacity: 0, x: -30, filter: "blur(16px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: 1.3,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: "inline-block" }}
              >
                for&nbsp;
              </motion.span>

              <motion.span
                className="uppercase text-[0.8em]"
                initial={{ opacity: 0, filter: "blur(24px)", scale: 0.95 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 1.45,
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: "inline-block" }}
              >
                <span
                  className="underline underline-offset-4 md:underline-offset-8"
                  style={{
                    textShadow: `
          0px 10px 10px rgba(0,0,0,0.7),
          0px 8px 20px rgba(0,0,0,0.4),
          0px 0px 40px rgba(255,255,255,0.08)
        `,
                  }}
                >
                  Maldives
                </span>{" "}
                Hospitality
              </motion.span>
            </motion.h2>
          </div>
        </div>
      </div>

      {/* SIDE BORDERS */}
      <div className="absolute inset-0 pointer-events-none z-40 border-x border-white/5 mx-4 sm:mx-8 md:mx-16" />
    </section>
  );
}

export default LandingHeroSection;
