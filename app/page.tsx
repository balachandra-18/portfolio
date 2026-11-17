import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden selection:bg-blue-600 selection:text-white"
      suppressHydrationWarning
    >
      {/* Ambient Aurora Glow Orbs for Frosted Glass Light Refraction */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" suppressHydrationWarning>
        <div className="ambient-glow-1" suppressHydrationWarning />
        <div className="ambient-glow-2" suppressHydrationWarning />
        <div className="ambient-glow-3" suppressHydrationWarning />
        <div className="ambient-glow-4" suppressHydrationWarning />
      </div>

      <Navbar />
      <main className="space-y-6" suppressHydrationWarning>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
