import { useEffect } from "react";

const RCHOfficial = () => {
  useEffect(() => {
    // Redirect to the live RCH website
    window.location.href = "https://www.rch.org.au/home/";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Redirecting...</h1>
        <p className="text-gray-600">
          Taking you to the Royal Children's Hospital Melbourne website.
        </p>
      </div>
    </div>
  );
};

export default RCHOfficial;
