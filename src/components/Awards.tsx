import { motion } from "framer-motion";
import prizesData from "../data/prize.json";

const images = import.meta.glob("../assets/award/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const prizes = prizesData.map((prize) => ({
  ...prize,
  image: images[`../assets/award/${prize.image}`],
}));

const Awards = () => {
  return (
    <section className="py-20 bg-background px-6 md:px-12 lg:px-20 xl:px-48">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-text text-center mb-12"
      >
        Awards & Titles
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {prizes.map((prize, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            whileHover={{ y: -6 }}
            className="group rounded-xl overflow-hidden border border-text/10 hover:border-primary/30 transition-colors"
          >
            <div className="w-full h-[180px] sm:h-[220px] bg-background overflow-hidden">
              {prize.image ? (
                <img
                  src={prize.image}
                  alt={prize.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-text/20 text-sm">
                  No image
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="text-sm sm:text-base font-semibold text-text text-center">
                {prize.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
