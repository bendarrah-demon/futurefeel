import { motion } from "framer-motion";
import { siteContent } from "../content/site";

export function Products() {
  const { products } = siteContent;

  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-4">
            {products.subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-800 max-w-2xl">
            {products.title}
          </h1>
          <p className="mt-6 text-xl text-stone-500 max-w-2xl leading-relaxed">
            Each product solves a real problem we've experienced ourselves. Built with care, designed to last.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-24">
          {products.items.map((product, index) => (
            <motion.article
              key={product.id}
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${product.accent}15` }}
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: product.accent }}
                    />
                  </div>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: product.status === "Live" ? "#dcfce7" : "#fef3c7",
                      color: product.status === "Live" ? "#166534" : "#92400e",
                    }}
                  >
                    {product.status}
                  </span>
                </div>

                <h2 className="text-3xl font-semibold text-stone-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-lg text-stone-500 mb-4">{product.tagline}</p>
                <p className="text-stone-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-stone-600"
                    >
                      <svg
                        className="w-5 h-5 flex-shrink-0"
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

                {product.status === "Live" ? (
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white transition-colors"
                    style={{ backgroundColor: product.accent }}
                  >
                    Try {product.name}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                ) : (
                  <button
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm border transition-colors"
                    style={{ borderColor: product.accent, color: product.accent }}
                  >
                    Get notified
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Visual placeholder */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div
                  className="aspect-[4/3] rounded-2xl flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: `${product.accent}08` }}
                >
                  {/* Phone mockup placeholder */}
                  <div className="w-48 h-80 bg-white rounded-3xl shadow-xl border border-stone-200 relative">
                    <div className="absolute inset-x-0 top-0 h-6 bg-stone-50 rounded-t-3xl flex items-center justify-center">
                      <div className="w-16 h-1 bg-stone-200 rounded-full" />
                    </div>
                    <div
                      className="absolute inset-x-3 top-10 bottom-3 rounded-xl"
                      style={{ backgroundColor: `${product.accent}10` }}
                    >
                      <div className="p-3">
                        <div
                          className="w-12 h-12 rounded-xl mb-3"
                          style={{ backgroundColor: `${product.accent}20` }}
                        />
                        <div className="h-3 bg-stone-200 rounded mb-2 w-3/4" />
                        <div className="h-2 bg-stone-100 rounded w-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
                    style={{ backgroundColor: product.accent }}
                  />
                  <div
                    className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full opacity-10"
                    style={{ backgroundColor: product.accent }}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-2">
              Exploring
            </p>
            <h2 className="text-2xl font-semibold text-stone-800">
              {products.pipeline.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {products.pipeline.items.map((item, index) => (
              <motion.div
                key={item}
                className="p-6 bg-white rounded-xl border border-stone-200 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-stone-600">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">
            Got ideas for what we should build?
          </h2>
          <p className="text-stone-500 mb-8 max-w-lg mx-auto">
            We're always looking for problems worth solving.
          </p>
          <a
            href={`mailto:${siteContent.cta.email}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-800 text-white rounded-xl font-medium text-sm hover:bg-stone-700 transition-colors"
          >
            Get in touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
