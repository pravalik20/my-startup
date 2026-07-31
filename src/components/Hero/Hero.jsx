"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#070313]"
    >
      {/* Background */}
      <HeroBackground />

      {/* Main Container */}
      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-8 lg:px-10">

        {/* Space Below Navbar */}
        <div className="h-28 lg:h-32" />

        {/* ================= HERO CONTENT ================= */}
        <div className="flex w-full justify-center">
          <div className="w-full max-w-[1050px] text-center">
            <HeroContent />
          </div>
        </div>

        {/* ================= HERO IMAGE ================= */}
        <div className="mt-2 flex w-full justify-center">
          <HeroScene />
        </div>

      </div>
    </section>
  );
}