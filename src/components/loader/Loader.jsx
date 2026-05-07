import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  // fake progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 5));
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Logo / Icon */}
      <div className="mb-6">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-green-600 rounded-full animate-spin"></div>
      </div>

      {/* Loading Text */}
      <h1 className="text-xl font-semibold text-gray-700 mb-2">
        Loading your experience...
      </h1>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-green-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Percentage */}
      <p className="text-sm text-gray-500 mb-4">{progress}%</p>

      {/* Tips / Dynamic message */}
      <p className="text-xs text-gray-400 italic text-center max-w-xs">
         Please wait a moment...
      </p>
    </div>
  );
};

export default Loader;
