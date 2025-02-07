export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img
          src="/error.png"
          alt="404 Not Found"
          className="w-72 mb-6"
        />
        <h1 className="text-3xl font-bold text-red-600 mb-2">Page Not Found</h1>
     <p className="text-center text-white mb-6">
          Sorry, the page you're looking for doesn't exist. <br />
          If you think something is broken, report a problem.
        </p>
        <div className="flex space-x-4">
          <a
            href="/"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Go Home
          </a>
          <a
            href="/contact"
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
            Contact Us
          </a>
        </div>
      </div>
    );
  }
  