import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative scroll-smooth">

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden -z-10">

        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-80 h-80 bg-purple-500 rounded-full blur-[150px] top-20 left-10 opacity-20"
        />

        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-80 h-80 bg-blue-500 rounded-full blur-[150px] bottom-20 right-10 opacity-20"
        />

      </div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-zinc-800"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold tracking-wider">
            DS
          </h1>

          <div className="flex gap-6 text-sm">

            <a href="#about" className="hover:text-gray-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-gray-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-gray-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-gray-400 transition">
              Contact
            </a>

          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold"
        >
          Deepasri
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-400 text-xl"
        >
          Frontend Developer
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 30px rgba(255,255,255,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold"
        >
          View Projects
        </motion.a>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-32 px-8 max-w-5xl mx-auto"
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-400 text-lg leading-8"
        >
          I am a passionate frontend developer focused on creating
          modern, responsive and animated web experiences using
          React and Tailwind CSS.
        </motion.p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-8">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "Java",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.08,
                y: -8,
              }}
              className="bg-zinc-900/70 backdrop-blur-lg border border-zinc-800 rounded-2xl p-6 text-center shadow-lg"
            >
              {skill}
            </motion.div>
          ))}

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-8">

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {[1, 2].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
              }}
              className="bg-zinc-900/70 backdrop-blur-lg border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="h-60 bg-gradient-to-br from-zinc-700 to-zinc-900"></div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  Project {item}
                </h3>

                <p className="text-gray-400 mt-4">
                  Modern responsive web application with clean UI
                  and smooth animations.
                </p>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="mt-6 px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all"
                >
                  View Project
                </motion.button>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 text-center px-6"
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl font-bold"
        >
          Let&apos;s Work Together
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-400 mt-6 text-lg"
        >
          Connect with me
        </motion.p>

        <div className="flex justify-center gap-8 mt-10 text-4xl">

          <motion.a
            whileHover={{ scale: 1.3, rotate: 10 }}
            href="https://github.com/deepasripushparaj-commits"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3, rotate: 10 }}
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3, rotate: 10 }}
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </motion.a>

        </div>
      </section>

    </div>
  );
}