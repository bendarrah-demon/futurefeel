import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Manifesto() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.h1
            className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            What we believe
          </motion.h1>

          <div className="space-y-8 text-lg text-stone-600 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Most technology makes life noisier. More notifications, more distractions, more things competing for your attention. We're trying the opposite.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-2xl text-stone-800 font-medium"
            >
              We believe that when people genuinely thrive — not just cope — they consume less and connect more.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              This isn't idealism. It's backed by research. People who score higher on psychological wellbeing consistently show lower materialism and higher community engagement.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              We think you can design products that create this effect.
            </motion.p>

            <motion.div
              className="border-l-2 border-stone-300 pl-6 my-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xl text-stone-700 italic">
                If we feel better inside, we need to buy less, we care more.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Too much of modern tech is designed to extract — your attention, your data, your peace of mind. We're building the opposite: products that give back more than they take.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Every product we make should get people into the real world — meeting actual humans, doing actual things. Digital is the coordination layer, not the destination.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              We're not precious about which products prove this. We build fast, test with real people, and kill what doesn't work. No sunk cost fallacy. No falling in love with our ideas.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-stone-500"
            >
              We might be wrong about all of this. We're figuring it out as we go. But we'd rather ship something imperfect than theorize forever.
            </motion.p>
          </div>

          <motion.div
            className="mt-16 pt-12 border-t border-stone-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/"
              className="text-stone-500 hover:text-stone-800 transition-colors"
            >
              ← Back home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
