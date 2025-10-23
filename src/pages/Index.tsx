import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Demo {
  id: string;
  title: string;
  description: string;
  path: string;
  color: string;
}

const Index = () => {
  const demos: Demo[] = [
    {
      id: "modern-demo",
      title: "Modern Demo",
      description: "Custom-built modern implementation with advanced features and cutting-edge design",
      path: "/modern-demo",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: "rch-official",
      title: "RCH Official + AI",
      description: "Official RCH website with integrated AI conversational agent",
      path: "/rch-official",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">callhenk.com</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Demo Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of demo implementations
          </p>
        </motion.div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {demos.map((demo, index) => (
            <motion.a
              key={demo.id}
              href={demo.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${demo.color} h-40 flex items-center justify-center`}></div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {demo.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {demo.description}
                </p>
                <div className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  View Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} callhenk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
