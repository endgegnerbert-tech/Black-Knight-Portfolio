import Hero from "@/components/Hero";
import GProject from "@/components/gProject";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";

export default function Home() {
  return (
    <main>
      <ThreeDBackground />
      <Hero />
      <GProject />
      <Footer />
    </main>
  );
}
