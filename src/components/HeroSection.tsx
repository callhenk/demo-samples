import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Phone, Users } from "lucide-react";

const HeroSection = () => {
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-cyan-50 to-white overflow-hidden pt-16 lg:pt-0 lg:flex lg:items-center border-b border-cyan-100">
      <div className="container mx-auto px-6 relative z-10 pt-8 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 backdrop-blur-sm text-sm text-cyan-700">
                  <Heart className="w-4 h-4 mr-2 animate-pulse" fill="currentColor" />
                  Australia's #1 Children's Hospital
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-bold text-gray-900 leading-tight tracking-tight">
                  Exceptional Care for Every Child
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Royal Children's Hospital Melbourne provides world-class
                  pediatric care, innovative research, and compassionate support
                  to children and families across Victoria.
                </p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              >
                <Button
                  size="lg"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl px-8 py-4 text-lg shadow-lg hover:shadow-cyan-200 transform hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.rch.org.au/",
                      "_blank"
                    )
                  }
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book an Appointment
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-semibold rounded-xl px-8 py-4 text-lg"
                  onClick={() =>
                    window.open(
                      "https://www.rch.org.au/home/",
                      "_blank"
                    )
                  }
                >
                  Learn More
                </Button>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-4 pt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <div className="flex flex-col items-start">
                  <div className="text-2xl font-bold text-cyan-600">50+</div>
                  <span className="text-sm text-gray-600">Medical Specialties</span>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-2xl font-bold text-cyan-600">1,000+</div>
                  <span className="text-sm text-gray-600">Expert Staff</span>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-2xl font-bold text-cyan-600">160+</div>
                  <span className="text-sm text-gray-600">Years Legacy</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
          >
            <motion.div
              ref={mediaRef}
              style={{ y: yParallax }}
              className="relative overflow-hidden rounded-2xl shadow-2xl border border-cyan-200 will-change-transform bg-cyan-50"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative aspect-video w-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Heart className="w-24 h-24 text-cyan-600 mx-auto" fill="currentColor" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Welcome to RCH
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Dedicated to the health and wellbeing of children
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="hidden lg:block absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-cyan-200 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  Patient-Centered Care
                </span>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-cyan-200 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 1.2 }}
            >
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium text-gray-700">
                  World-Class Care
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
