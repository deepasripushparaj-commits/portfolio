import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative scroll-smooth">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">

        <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-[120px] top-20 left-10 opacity-20"></div>

        <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-[120px] bottom-20 right-10 opacity-20"></div>

      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold">
            Deepasri
          </h1>

          <div className="flex gap-6 text-sm">

            <a href="#about" className="hover:text-gray-400">
              About
            </a>

            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>

            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>

            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold"
        >
          View Projects
        </motion.a>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-8 max-w-5xl mx-auto">

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-400 text-lg leading-8"
        >
          I am a passionate frontend developer focused on creating
          modern, responsive, and animated web experiences using
          React and Tailwind CSS.
        </motion.p>

      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "Java"
          ].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{
                scale: 1.05,
                borderColor: "#ffffff"
              }}
              className="bg-zinc-900/70 backdrop-blur-lg border border-zinc-800 rounded-2xl p-6 text-center transition-all shadow-lg"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {[1, 2].map((item) => (
            <motion.div
              key={item}
              whileHover={{
                y: -10,
                scale: 1.02
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

                <button className="mt-6 px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all">
                  View Project
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 text-center px-6">

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-6 text-lg"
        >
          deepasripushparaj@gmail.com
        </motion.p>

      </section>

    </div>
  );
}