import { motion } from "framer-motion";

interface ColorTileProps {
  label: string;
  href: string;
  colorVar: string;
  icon?: React.ReactNode;
}

const ColorTile = ({ label, href, colorVar, icon }: ColorTileProps) => {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
      whileTap={{ y: -4 }}
      className={`block p-8 md:p-10 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-[hsl(var(${colorVar}))]`}
    >
      {icon && <div className="mb-4 text-5xl drop-shadow-lg">{icon}</div>}
      <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">{label}</h3>
    </motion.a>
  );
};

export default ColorTile;
