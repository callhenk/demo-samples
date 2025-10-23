import {
  Stethoscope,
  Brain,
  Heart,
  Microscope,
  Users,
  Ambulance,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Reveal from "@/components/animations/Reveal";

const features = [
  {
    icon: Stethoscope,
    title: "Comprehensive Medical Services",
    description:
      "Over 50 medical specialties under one roof, providing comprehensive care for all pediatric conditions with world-class expertise.",
  },
  {
    icon: Brain,
    title: "Neurology & Brain Health",
    description:
      "Advanced neurological services including epilepsy management, brain tumors, and developmental disorders with cutting-edge treatment options.",
  },
  {
    icon: Heart,
    title: "Cardiac Care",
    description:
      "Specialized cardiology services for congenital heart disease and acquired cardiac conditions with renowned pediatric cardiologists.",
  },
  {
    icon: Microscope,
    title: "Research & Innovation",
    description:
      "Leading pediatric research programs developing tomorrow's treatments and advancing child health care globally.",
  },
  {
    icon: Users,
    title: "Family-Centered Care",
    description:
      "We believe family is central to healing. Our patient-centered approach involves families in every aspect of care.",
  },
  {
    icon: Ambulance,
    title: "Emergency Services",
    description:
      "24/7 emergency department with specialized pediatric emergency medicine, ready to care for children of all ages.",
  },
];

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <section className="py-32 bg-gradient-to-b from-white to-cyan-50 border-y border-cyan-100">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 text-sm text-cyan-700 mb-6">
            <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
            Our Services
          </div>
          <h2 className="text-5xl font-display font-bold text-gray-900 mb-6">
            World-Class <span className="text-cyan-600">Pediatric Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From emergency care to specialized surgery, our expert teams provide
            comprehensive medical services for every child's unique needs.
          </p>
        </Reveal>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border border-cyan-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-cyan-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
