import { motion } from "framer-motion";

interface HeroSplitProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

const HeroSplit = ({
  image,
  imageAlt,
  title,
  description,
  ctaText,
  ctaHref,
}: HeroSplitProps) => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image - Full bleed on left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-auto rounded-lg shadow-lg object-cover aspect-square md:aspect-auto"
            />
          </motion.div>

          {/* Right: Feature callout panel on orange background */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 bg-[hsl(var(--hospital-orange))] rounded-xl p-8 md:p-10 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-base md:text-lg opacity-95 mb-6 leading-relaxed">
              {description}
            </p>
            <a
              href={ctaHref}
              className="inline-block px-6 py-3 bg-white text-[hsl(var(--hospital-orange))] font-semibold rounded-lg hover:shadow-lg transition-shadow"
            >
              {ctaText}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplit;
