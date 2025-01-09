export default function Loading() {
    return (
      <div className="flex flex-col items-center justify-center  bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Loading the site, please wait...
        </h1>
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-pulse"></div>
      </div>
    );
  }
  