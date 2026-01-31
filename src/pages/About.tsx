import { motion } from "framer-motion";
import { siteContent } from "../content/site";

export function About() {
  const { about } = siteContent;

  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-800 max-w-2xl">
            {about.title}
          </h1>
          <p className="mt-6 text-xl text-stone-500 max-w-2xl leading-relaxed">
            {about.story}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Logo visual */}
            <motion.div
              className="relative aspect-square max-w-sm mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="absolute w-48 h-48 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  background: "#93a5cf",
                  clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
                }}
              />
              <div
                className="absolute w-48 h-48 top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4"
                style={{
                  background: "#f5b8a8",
                  clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)",
                  opacity: 0.9,
                }}
              />
            </motion.div>

            {/* Content */}
            <div>
              <h2 className="text-2xl font-semibold text-stone-800 mb-6">
                Why "Future Feel"?
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  The name captures what we're after: technology that doesn't just work, but <em>feels</em> right. Technology that makes you feel better about the future, not worse.
                </p>
                <p>
                  Too much of modern tech is designed to extract — your attention, your data, your peace of mind. We're building the opposite: products that give back more than they take.
                </p>
                <p>
                  Every product we create must pass a simple test: does this make someone's life genuinely better? If not, we don't build it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caveats - the honest bit */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-semibold text-stone-800 mb-8">
            Some honesty
          </h2>

          <div className="space-y-4 max-w-2xl">
            {about.caveats.map((caveat, index) => (
              <motion.div
                key={caveat}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-lg text-stone-600">{caveat}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              How we work
            </h2>
            <p className="text-stone-500">
              Every decision we make is guided by these principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Local-first",
                description: "Your data stays on your device whenever possible. Privacy isn't a feature — it's the foundation.",
              },
              {
                title: "No dark patterns",
                description: "We don't use tricks to keep you engaged. If you're done using our product, that's a success.",
              },
              {
                title: "Honest business models",
                description: "We charge fair prices for valuable products. No ads, no data selling, no hidden motives.",
              },
              {
                title: "Built to last",
                description: "We design for durability. Products that work reliably for years, not features for this quarter.",
              },
              {
                title: "Accessible by default",
                description: "Good design works for everyone. We build with accessibility as a core requirement, not an afterthought.",
              },
              {
                title: "Human scale",
                description: "We're not trying to be the next big thing. We're building a small portfolio of products we're proud of.",
              },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                className="p-6 bg-white rounded-xl border border-stone-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="font-semibold text-stone-800 mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">
            {siteContent.cta.title}
          </h2>
          <p className="text-stone-500 mb-8 max-w-lg mx-auto">
            {siteContent.cta.description}
          </p>
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
      </section>
    </div>
  );
}
