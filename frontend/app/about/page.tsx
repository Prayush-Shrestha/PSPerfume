import Navbar from "../components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about PS Perfume and our luxury fragrances.",
};



export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020817] text-white overflow-hidden scroll-smooth">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a33,transparent_60%)] pointer-events-none" />

        <section className="relative flex items-center justify-center text-center px-6 py-28">
          <div className="max-w-3xl">

            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Luxe Perfume
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed">
              We create luxurious fragrances that express personality,
              elegance, and unforgettable memories. Every perfume is crafted
              with passion, quality, and attention to detail.
            </p>

            <div className="mt-10 flex justify-center gap-5">

              <Link href="#mission">
                <button className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 hover:shadow-cyan-400/40 transition-all duration-300">
                  Our Mission
                </button>
              </Link>

              <Link href="#story">
                <button className="px-7 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </Link>

            </div>
          </div>
        </section>


        <section className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {[
            { label: "Perfumes", value: "50+" },
            { label: "Customers", value: "10K+" },
            { label: "Years", value: "5+" },
            { label: "Collections", value: "12" },
          ].map((item, i) => (

            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl py-6 hover:bg-white/10 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p className="text-gray-400 text-sm mt-1">{item.label}</p>
            </div>

          ))}

        </section>


        <section
          id="mission"
          className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center"
        >

          <div>

            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              Our mission is to bring premium and long-lasting fragrances
              that help people express their unique identity.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We focus on quality ingredients, elegant designs, and creating
              memorable experiences through fragrance.
            </p>

          </div>


          <div className="bg-[#0b1224] border border-white/10 rounded-2xl p-8 hover:shadow-lg hover:shadow-blue-500/10 transition">

            <h3 className="text-2xl font-semibold mb-4">
              What Drives Us
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Premium fragrance quality</li>
              <li>✔ Unique perfume collections</li>
              <li>✔ Customer satisfaction</li>
              <li>✔ Luxury experience</li>
            </ul>

          </div>

        </section>


        <section
          id="story"
          className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center"
        >

          <div className="relative">

            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl opacity-20 rounded-2xl" />

            <div className="relative bg-[#0b1224] border border-white/10 rounded-2xl p-8">

              <h3 className="text-2xl font-semibold mb-4">
                Our Values
              </h3>

              <ul className="space-y-4 text-gray-300">
                <li>✔ Luxury craftsmanship</li>
                <li>✔ Premium ingredients</li>
                <li>✔ Elegant presentation</li>
                <li>✔ Customer-first approach</li>
              </ul>

            </div>

          </div>


          <div>

            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Our Story
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              Luxe Perfume started with a simple vision — to create fragrances
              that represent confidence, elegance, and individuality.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Today, we continue to combine creativity and premium fragrance
              techniques to deliver unforgettable scents.
            </p>

          </div>

        </section>


        <section className="text-center py-20 px-6">

          <div className="max-w-2xl mx-auto">

            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Discover Your Signature Scent
            </h2>

            <p className="text-gray-400 mb-8">
              Find a fragrance that matches your personality and style.
            </p>

            <Link href="/shop">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold hover:scale-105 transition shadow-lg shadow-cyan-400/30">
                Explore Perfumes
              </button>
            </Link>

          </div>

        </section>

      </main>
    </>
  );
}