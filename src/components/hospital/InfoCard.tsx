import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface InfoCardProps {
  title: string;
  body: string;
  icon?: React.ReactNode;
  image?: string;
  ctaText: string;
  ctaHref: string;
}

const InfoCard = ({
  title,
  body,
  icon,
  image,
  ctaText,
  ctaHref,
}: InfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      {/* Image or Icon */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      {icon && !image && (
        <div className="w-full h-48 bg-[hsl(var(--hospital-bg-soft))] flex items-center justify-center text-5xl">
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[hsl(var(--hospital-text-strong))] mb-3">
          {title}
        </h3>
        <p className="text-[hsl(var(--hospital-text-muted))] text-sm leading-relaxed mb-4">
          {body}
        </p>
        <a
          href={ctaHref}
          className="inline-flex items-center text-[hsl(var(--hospital-blue-strong))] font-semibold hover:text-[hsl(var(--hospital-blue-bright))] transition-colors"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default InfoCard;
