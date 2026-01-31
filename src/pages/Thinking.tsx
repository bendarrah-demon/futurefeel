import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteContent } from "../content/site";

export function Thinking() {
  const { thinking } = siteContent;

  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-4">
            {thinking.title}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-800 max-w-2xl">
            {thinking.subtitle}
          </h1>
          <p className="mt-6 text-lg text-stone-500 max-w-2xl leading-relaxed">
            {thinking.intro}
          </p>
        </div>
      </section>

      {/* Core Insight */}
      <section className="py-16 bg-stone-800">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-6">
            {thinking.coreInsight.title}
          </p>
          <blockquote className="text-2xl md:text-3xl font-medium text-white leading-snug max-w-3xl mb-8">
            "{thinking.coreInsight.quote}"
          </blockquote>
          <p className="text-stone-400 max-w-2xl leading-relaxed">
            {thinking.coreInsight.explanation}
          </p>
        </div>
      </section>

      {/* Problem Space */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              {thinking.problemSpace.title}
            </h2>
            <p className="text-stone-500">
              {thinking.problemSpace.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thinking.problemSpace.challenges.map((challenge, index) => (
              <motion.div
                key={challenge.name}
                className="p-6 bg-white rounded-xl border border-stone-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="font-semibold text-stone-800 mb-2">
                  {challenge.name}
                </h3>
                <p className="text-sm text-stone-500">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Double Donut */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-2">
              {thinking.doubleDonut.subtitle}
            </p>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              {thinking.doubleDonut.title}
            </h2>
            <p className="text-stone-500 leading-relaxed">
              {thinking.doubleDonut.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="p-8 bg-white rounded-2xl border border-stone-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-stone-800 mb-4">
                {thinking.doubleDonut.individual.name}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {thinking.doubleDonut.individual.description}
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-white rounded-2xl border border-stone-200"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-stone-800 mb-4">
                {thinking.doubleDonut.organization.name}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {thinking.doubleDonut.organization.description}
              </p>
            </motion.div>
          </div>

          <p className="text-lg text-stone-700 max-w-3xl leading-relaxed">
            {thinking.doubleDonut.connection}
          </p>
        </div>
      </section>

      {/* Digital Physical */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-stone-800 mb-6">
              {thinking.digitalPhysical.title}
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              {thinking.digitalPhysical.description}
            </p>
          </div>
        </div>
      </section>

      {/* Financial Model */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-semibold text-stone-800 mb-12">
            {thinking.financialModel.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {thinking.financialModel.sections.map((section, index) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-stone-800 mb-3">
                  {section.name}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {section.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to the simple version
          </Link>
        </div>
      </section>
    </div>
  );
}
