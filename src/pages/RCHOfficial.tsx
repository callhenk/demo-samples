import { useEffect } from "react";
import ConversationalAgent from "@/components/ConversationalAgent";

const RCHOfficial = () => {
  useEffect(() => {
    // Redirect to the live RCH website after a short delay
    const timer = setTimeout(() => {
      window.location.href = "https://www.rch.org.au/home/";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-50 flex items-center justify-center">
      {/* Loading Message */}
      <div className="text-center z-0">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Opening RCH Melbourne</h1>
        <p className="text-lg text-gray-600 mb-2">
          You'll be redirected to the official website in a moment...
        </p>
        <p className="text-sm text-gray-500">
          Or <a href="https://www.rch.org.au/home/" className="text-blue-600 hover:underline">click here</a> if you're not redirected automatically
        </p>
      </div>

      {/* Conversational Agent Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <ConversationalAgent />
      </div>
    </div>
  );
};

export default RCHOfficial;
