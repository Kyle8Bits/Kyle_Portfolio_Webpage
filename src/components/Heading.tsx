import profileImg from "../assets/me/Khoa_DEV_PNG.png";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Activities", href: "#activities" },
];

const Heading = () => {
  return (
    <section className="relative min-h-[80%] overflow-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-6"
      >
        <span className="text-text text-lg font-semibold tracking-wide">
          Kyle Porfolio
        </span>
        <ul className="hidden sm:flex gap-6 md:gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <a
                href={link.href}
                className="text-text/70 text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Hero */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 xl:px-48 mt-12 md:mt-16 lg:mt-24 gap-12 lg:gap-0">
        {/* Left content */}
        <div className="z-10 max-w-xl text-center lg:text-left">
          <motion.h1
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text"
          >
            Hello<span className="text-primary">.</span>
          </motion.h1>

          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start gap-4 mt-6"
          >
            <span className="block w-12 h-[2px] bg-primary" />
            <p className="text-text/80 text-lg sm:text-xl lg:text-2xl">
              I'm Kyle
            </p>
          </motion.div>

          <motion.h2
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-4"
          >
            Software Engineer
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex justify-center lg:justify-start gap-4 mt-10"
          >
            <a
              href="mailto:khoamaidang2611@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-text/20 rounded-full text-text/70 hover:text-primary hover:border-primary transition-colors"
              aria-label="Gmail"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://github.com/Kyle8Bits"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-text/20 rounded-full text-text/70 hover:text-primary hover:border-primary transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/kylemai261/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-text/20 rounded-full text-text/70 hover:text-primary hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right - Profile image with decorative rings */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex items-center justify-center w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[560px] lg:h-[560px] shrink-0"
        >
          {/* Decorative rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] sm:w-[360px] lg:w-[480px] h-[280px] sm:h-[360px] lg:h-[480px] rounded-full border-2 border-primary/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[230px] sm:w-[300px] lg:w-[400px] h-[230px] sm:h-[300px] lg:h-[400px] rounded-full border-2 border-primary/20"
          />
          <div className="absolute w-[300px] sm:w-[380px] lg:w-[500px] h-[300px] sm:h-[380px] lg:h-[500px] rounded-full border-[3px] border-primary/40 top-4 left-4" />

          {/* Decorative arrows */}
          <span className="absolute -right-2 top-1/2 text-primary/50 text-2xl lg:text-3xl">
            &rsaquo;&rsaquo;
          </span>
          <span className="absolute -left-2 top-1/2 text-primary/50 text-2xl lg:text-3xl">
            &lsaquo;&lsaquo;
          </span>

          {/* Profile image */}
          <img
            src={profileImg}
            alt="Kyle"
            className="relative z-10 w-[220px] sm:w-[280px] lg:w-[360px] h-[290px] sm:h-[370px] lg:h-[480px] object-cover object-top rounded-b-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Heading;
