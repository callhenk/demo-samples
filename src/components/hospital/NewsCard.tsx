import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

interface NewsCardProps {
  image: string;
  imageAlt: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
}

const NewsCard = ({
  image,
  imageAlt,
  title,
  date,
  excerpt,
  href,
}: NewsCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
    >
      {/* Image */}
      <div className="overflow-hidden h-48 bg-[hsl(var(--hospital-bg-soft))]">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center text-xs font-semibold text-[hsl(var(--hospital-text-muted))] mb-3">
          <Calendar className="w-4 h-4 mr-1.5" />
          {date}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[hsl(var(--hospital-text-strong))] mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[hsl(var(--hospital-text-muted))] mb-4 line-clamp-2">
          {excerpt}
        </p>

        {/* Link */}
        <a
          href={href}
          className="inline-flex items-center text-[hsl(var(--hospital-blue-strong))] font-semibold hover:text-[hsl(var(--hospital-blue-bright))] transition-colors group/link"
        >
          Read more
          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.article>
  );
};

export default NewsCard;
