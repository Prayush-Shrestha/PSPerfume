import Image from "next/image";
import Link from "next/link";



export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#020817] text-white overflow-hidden">

      
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center px-8 py-24 gap-12">

        
        <div className="space-y-6 animate-fadeIn">

          <p className="uppercase tracking-[8px] text-gray-400 text-sm">
            Luxury fragrance collection
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            SCENT THAT <br />
            <span className="text-yellow-400">DEFINES YOU</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-md leading-relaxed">
            Experience timeless perfumes crafted with rare ingredients that leave a lasting impression wherever you go.
          </p>

      
          <div className="flex gap-5 pt-4">
            <Link href="/shop">
              <button className="bg-yellow-500 text-black px-8 py-4 font-bold rounded-full btn-hover shadow-lg shadow-yellow-500/20">
                SHOP NOW
              </button>
            </Link>

            <Link href="/about">
              <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition">
                EXPLORE
              </button>
            </Link>
          </div>
        </div>

       
        <div className="relative flex justify-center animate-fadeIn">

       
          <div className="absolute w-[350px] h-[350px] bg-yellow-500/20 blur-[120px] rounded-full" />

          
          <div className="relative animate-float hover:scale-105 transition duration-500 glow">
            <Image
              src="/images/perfume.jpg"
              alt="perfume"
              width={520}
              height={520}
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}