import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Lock, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import VideoModal from "./VideoModal";

const CTASection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="py-32 bg-gradient-to-br from-cyan-50 to-cyan-100 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 mt-5 md:mt-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                Manage Your Care
                <br />
                <span className="text-cyan-600">Your Way</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Access your medical records, schedule appointments, and communicate with your healthcare team through our secure patient portal
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
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
                  Access Patient Portal
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-cyan-600 hover:bg-cyan-50 border-cyan-600 rounded-xl px-8 py-4 text-lg"
                  onClick={() =>
                    window.open(
                      "https://www.rch.org.au/home/",
                      "_blank"
                    )
                  }
                >
                  Learn More
                </Button>
              </div>

              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-cyan-600" />
                  <span>Secure and HIPAA compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-cyan-600" />
                  <span>24/7 access to your health information</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-cyan-600" />
                  <span>Direct messaging with your care team</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white border border-cyan-200">
                <div className="aspect-video w-full bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <User className="w-24 h-24 text-cyan-600 mx-auto opacity-40" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Patient Portal
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Secure access to your health information
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
};

export default CTASection;
