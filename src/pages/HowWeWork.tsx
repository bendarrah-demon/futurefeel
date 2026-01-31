import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteContent } from "../content/site";

export function HowWeWork() {
  const { howWeWork } = siteContent;

  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-4">
            {howWeWork.title}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-800 max-w-2xl">
            {howWeWork.subtitle}
          </h1>
          <p className="mt-6 text-lg text-stone-500 max-w-2xl leading-relaxed">
            {howWeWork.intro}
          </p>
        </div>
      </section>

      {/* AI Enabled */}
      <section className="py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-semibold text-white mb-6">
            {howWeWork.aiEnabled.title}
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl leading-relaxed mb-12">
            {howWeWork.aiEnabled.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {howWeWork.aiEnabled.implications.map((implication, index) => (
              <motion.div
                key={implication}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <svg
                  className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-stone-300">{implication}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Loop */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-semibold text-stone-800 mb-12">
            {howWeWork.process.title}
          </h2>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-stone-200 hidden md:block" />

            <div className="space-y-8">
              {howWeWork.process.steps.map((step, index) => (
                <motion.div
                  key={step.name}
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative z-10 w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-stone-600">
                      {index + 1}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-stone-800 mb-1">
                      {step.name}
                    </h3>
                    <p className="text-stone-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-semibold text-stone-800 mb-6">
            {howWeWork.team.title}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
            {howWeWork.team.description}
          </p>

          <div className="mt-12">
            <a
              href={`mailto:${siteContent.cta.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-800 text-white rounded-xl font-medium text-sm hover:bg-stone-700 transition-colors"
            >
              {siteContent.cta.buttonText}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* See the thinking */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <p className="text-stone-500 mb-4">
            Want to understand the philosophy behind this?
          </p>
          <Link
            to="/thinking"
            className="text-stone-700 hover:text-stone-900 font-medium transition-colors"
          >
            Read the full thinking →
          </Link>
        </div>
      </section>
    </div>
  );
}
