import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">RCH Clone</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to RCH Clone
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore two different website implementations for Royal Children's Hospital Melbourne.
            Both featuring AI-powered conversational agents for enhanced patient interaction.
          </p>
        </motion.div>

        {/* Demo Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Modern Demo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 h-32 flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-white" />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Modern Demo</h2>
              <p className="text-gray-600 mb-6">
                AI-powered healthcare platform featuring conversational agents, real-time analytics, and modern fundraising tools. Built with advanced features and cutting-edge design.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  AI Conversation Interface
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Advanced Analytics Dashboard
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Modern RCH Branding
                </div>
              </div>
              <a
                href="/modern-demo"
                className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Explore Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>

          {/* RCH Official Demo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 h-32 flex items-center justify-center">
              <span className="text-5xl">🤖</span>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">RCH Official + AI</h2>
              <p className="text-gray-600 mb-6">
                The actual Royal Children's Hospital Melbourne official website with integrated AI conversational agent. Experience the production website with AI-powered patient assistance for enhanced interaction.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Official RCH Website
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  AI Chat Assistant
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Patient & Family Resources
                </div>
              </div>
              <a
                href="/rch-official"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Visit Official Website
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Features Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Features Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-cyan-600">Modern Demo</th>
                  <th className="text-center py-3 px-4 font-semibold text-purple-600">RCH Official + AI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Responsive Design</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">AI Chat Interface</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Modern Design</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4">-</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Production Website</td>
                  <td className="text-center py-3 px-4">-</td>
                  <td className="text-center py-3 px-4">✓</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">Health Information</td>
                  <td className="text-center py-3 px-4">-</td>
                  <td className="text-center py-3 px-4">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700">Real Patient Resources</td>
                  <td className="text-center py-3 px-4">-</td>
                  <td className="text-center py-3 px-4">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Royal Children's Hospital Melbourne</h3>
              <p className="text-gray-400 text-sm">
                Australia's leading pediatric healthcare facility
              </p>
              <p className="text-gray-400 text-sm mt-4">
                📍 50 Flemington Road, Parkville Victoria 3052, Australia<br />
                📞 +61 3 9345 5522
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/modern-demo" className="hover:text-white transition-colors">
                    Modern Demo
                  </a>
                </li>
                <li>
                  <a href="/rch-official" className="hover:text-white transition-colors">
                    RCH Official + AI
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Royal Children's Hospital Melbourne. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
