import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <span className="font-mono text-sm text-blue-500 mb-4">error 404</span>
      <h1 className="font-[var(--font-display)] font-bold text-6xl gradient-text mb-4">
        Page not found
      </h1>
      <p className="text-[var(--text-muted)] max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-medium text-sm hover:opacity-90 transition-opacity"
      >
        <FiArrowLeft size={16} /> Back to home
      </Link>
    </div>
  );
}
