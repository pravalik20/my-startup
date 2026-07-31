import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070313] text-white">
      <Navbar />
      <Hero />
    </main>
  );
}