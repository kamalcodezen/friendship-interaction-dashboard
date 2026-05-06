import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="max-w-md w-full text-center bg-white shadow-xl rounded-2xl p-8">
        {/* Emoji */}
        <div className="text-6xl mb-4 animate-bounce">🚫</div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-green-600 mb-2">404</h1>

        {/* Message */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-4">
          The page you're looking for doesn’t exist... maybe it went on vacation
          🏝️
        </p>

        <p className="text-sm text-gray-400 mb-6 italic">
          Try going back before it disappears again 😄
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-2.5 rounded-lg text-white font-medium 
          bg-gradient-to-r from-green-500 to-emerald-600 
          hover:from-green-600 hover:to-emerald-700 
          shadow-md hover:shadow-xl 
          active:scale-95 transition duration-300"
        >
          🏠 Go Home
        </Link>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-6">
          If you typed the URL… maybe check your spelling 😅
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;