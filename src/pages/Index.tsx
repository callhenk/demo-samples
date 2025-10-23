import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

interface Demo {
  id: string;
  title: string;
  description: string;
  path: string;
  color: string;
  icon?: string;
}

const Index = () => {
  const demos: Demo[] = [
    {
      id: "modern-demo",
      title: "Modern Demo",
      description: "Custom-built modern implementation with advanced features and cutting-edge design",
      path: "/modern-demo",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "rch-official",
      title: "RCH Official + AI",
      description: "Official RCH website with integrated AI conversational agent",
      path: "/rch-official",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">callhenk</h1>
            </div>
            <nav className="hidden md:flex gap-8 text-sm text-gray-600">
              <a href="#demos" className="hover:text-gray-900 transition-colors">Demos</a>
              <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Demo Showcase
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Explore our collection of modern, professional web implementations with advanced features and AI integration.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Demo Grid Section */}
        <div id="demos" className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-8">
            {demos.map((demo, index) => (
              <motion.a
                key={demo.id}
                href={demo.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-200 hover:border-gray-300"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative p-8 md:p-10">
                  {/* Color Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${demo.color}`}></div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {demo.title}
                  </h2>

                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {demo.description}
                  </p>

                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Explore
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div id="about" className="bg-gray-50 border-t border-gray-200 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                All demos include modern design patterns, responsive layouts, and cutting-edge technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Responsive Design", description: "Perfect on all devices and screen sizes" },
                { title: "Modern UI/UX", description: "Clean, intuitive interfaces with smooth animations" },
                { title: "AI Integration", description: "Conversational AI agents for enhanced interaction" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 border-t border-gray-800 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-white">callhenk</span>
              </div>
              <p className="text-sm">Professional web demonstrations and implementations</p>
            </div>
            <div className="text-center md:text-right text-sm">
              <p>&copy; {new Date().getFullYear()} callhenk. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
