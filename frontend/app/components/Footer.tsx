export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-16 text-white">

     
      <div className="footer-bg">
        <div className="footer-blob footer-blob1" />
        <div className="footer-blob footer-blob2" />
        <div className="footer-glow" />
      </div>

   
      <div className="relative max-w-7xl mx-auto text-center footer-content">

        <h2 className="text-3xl md:text-4xl font-serif tracking-widest footer-title">
          PS PERFUMES
        </h2>

        <p className="mt-4 text-gray-300 max-w-md mx-auto footer-text">
          Timeless fragrances crafted for elegance, confidence, and presence.
        </p>

     
        <div className="w-24 h-[1px] bg-yellow-500/60 mx-auto my-6" />

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} PS Perfumes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}