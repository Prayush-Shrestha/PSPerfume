export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>

        <h1 className="mt-6 text-4xl font-serif text-yellow-500">
          PS
        </h1>

        <p className="tracking-[5px] text-white">
          PERFUMES
        </p>

        <p className="mt-4 text-gray-400">
          Loading...
        </p>
      </div>
    </div>
  );
}