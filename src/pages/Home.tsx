import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteContent } from "../content/site";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-800 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {siteContent.hero.headline}
            </motion.h1>

            <motion.p
              className="mt-6 text-2xl md:text-3xl text-stone-500 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {siteContent.hero.subheadline}
            </motion.p>

            <motion.p
              className="mt-8 text-lg text-stone-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {siteContent.hero.intro}
            </motion.p>

            <motion.div
              className="mt-12 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href={`mailto:${siteContent.cta.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-800 text-white rounded-xl font-medium text-sm hover:bg-stone-700 transition-colors"
              >
                {siteContent.cta.buttonText}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-stone-600 rounded-xl font-medium text-sm hover:bg-stone-100 transition-colors"
              >
                See what we're building
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-4">
            {siteContent.approach.title}
          </p>
          <p className="text-xl md:text-2xl text-stone-700 leading-relaxed max-w-3xl">
            {siteContent.approach.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {siteContent.approach.principles.map((principle, index) => (
              <motion.span
                key={principle}
                className="px-4 py-2 bg-stone-100 text-stone-600 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {principle}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-2">
                {siteContent.products.subtitle}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-stone-800">
                {siteContent.products.title}
              </h2>
            </div>
            <Link
              to="/products"
              className="text-sm text-stone-500 hover:text-stone-800 transition-colors hidden md:block"
            >
              View all →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {siteContent.products.items.map((product, index) => (
              <motion.article
                key={product.id}
                className="group p-8 bg-white rounded-2xl border border-stone-200 hover:border-stone-300 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${product.accent}15` }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: product.accent }}
                    />
                  </div>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: product.status === "Live" ? "#dcfce7" : "#fef3c7",
                      color: product.status === "Live" ? "#166534" : "#92400e",
                    }}
                  >
                    {product.status}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-stone-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-stone-500 mb-4">{product.tagline}</p>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {product.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-stone-500"
                    >
                      <svg
                        className="w-4 h-4"
                        style={{ color: product.accent }}
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {/* Pipeline */}
          <div className="mt-12 p-6 bg-stone-50 rounded-2xl">
            <p className="text-sm font-medium text-stone-500 mb-4">
              {siteContent.products.pipeline.title}
            </p>
            <ul className="space-y-2">
              {siteContent.products.pipeline.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-stone-600">
                  <span className="w-1.5 h-1.5 bg-stone-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Advisors CTA */}
      <section className="py-24 bg-stone-800">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              {siteContent.cta.title}
            </h2>
            <p className="text-lg text-stone-400 mb-6">
              {siteContent.cta.subtitle}
            </p>
            <p className="text-stone-400 mb-8">
              {siteContent.cta.description}
            </p>

            <a
              href={`mailto:${siteContent.cta.email}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-stone-800 rounded-xl font-medium text-sm hover:bg-stone-100 transition-colors"
            >
              {siteContent.cta.buttonText}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Deep Dive Teaser */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <p className="text-stone-500 mb-2">{siteContent.deepDive.teaser}</p>
          <p className="text-sm text-stone-400 mb-4">{siteContent.deepDive.warning}</p>
          <Link
            to="/thinking"
            className="text-stone-700 hover:text-stone-900 font-medium transition-colors"
          >
            {siteContent.deepDive.linkText}
          </Link>
        </div>
      </section>
    </div>
  );
}
