import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Results from "@/components/Results";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="bg-black min-h-screen h-auto">
      {" "}
      <Navbar />
      <Hero />
      <Features />
      <Results />
      <Feedback />
      <Footer />
    </div>
  );
}
