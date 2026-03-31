import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import slidesData from "../data/iam.json";

const images = import.meta.glob("../assets/me/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const slides = slidesData.map((slide) => ({
  ...slide,
  src: images[`../assets/me/${slide.src}`],
}));

const WhoIAm = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 1.5;

    const animate = () => {
      if (!pausedRef.current) {
        position -= speed;
        const singleSetWidth = track.scrollWidth / 4;

        if (Math.abs(position) >= singleSetWidth) {
          position = 0;
        }

        track.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleMouseEnter = (index: number) => {
    pausedRef.current = true;
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
    setHoveredIndex(null);
  };

  const allSlides = [...slides, ...slides, ...slides, ...slides];

  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-text text-center mb-12"
      >
        Who I Am
      </motion.h2>

      <div className="relative">
        <div ref={trackRef} className="flex gap-4 sm:gap-8 w-max">
          {allSlides.map((slide, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                className="flex flex-col items-center w-[240px] sm:w-[300px] md:w-[400px] shrink-0 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] rounded-xl overflow-hidden">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      isHovered ? "scale-105 blur-[2px] brightness-50" : ""
                    }`}
                  />

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h3 className="text-text text-sm sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-center">
                      {slide.description}
                    </h3>
                    <p className="text-text/80 text-xs sm:text-sm text-center leading-relaxed">
                      {slide.detail}
                    </p>
                  </div>
                </div>

                <p className="text-text/70 text-sm sm:text-base mt-4 text-center px-4">
                  {slide.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;
