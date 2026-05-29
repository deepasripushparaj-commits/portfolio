import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
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

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-8 px-6 py-3 bg-white text-black rounded-full"
        >
          View Projects
        </motion.button>

      </section>

      {/* ABOUT SECTION */}
      <section className="py-32 px-8 max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-400 leading-8 text-lg">
          I am a passionate frontend developer who loves building
          modern websites with smooth animations and premium UI design.
        </p>

      </section>

      {/* SKILLS SECTION */}
      <section className="py-20 px-8">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

          {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git", "GitHub", "Java"].map((skill) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={skill}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section className="py-32 px-8">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {[1, 2].map((item) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={item}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
            >

              <div className="h-60 bg-zinc-800"></div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  Project {item}
                </h3>

                <p className="text-gray-400 mt-3">
                  Modern responsive web application with clean UI.
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section className="py-32 text-center">

        <h2 className="text-4xl font-bold">
          Let’s Work Together
        </h2>

        <p className="text-gray-400 mt-4">
          deepasri@example.com
        </p>

      </section>

    </div>
  );
}