import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";
import AboutUs from "@/components/AboutUs";
import OurWork from "@/components/OurWork";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero1 />
      <AboutUs />
      <OurWork />
      <Feedback />
      <Footer />
    </div>
  );
}
