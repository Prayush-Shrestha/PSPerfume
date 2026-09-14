import Navbar from "../components/Navbar";
import SearchProducts from "../components/SearchProducts";

export default function SearchPage() {
  return (
    <>
      <Navbar />

      <section className="bg-[#020817] min-h-screen text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-serif text-center mb-10">
            Search Perfumes
          </h1>

          <SearchProducts />
        </div>
      </section>
    </>
  );
}