import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className=" bg-gray-950 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <title>Priyansh's portfolio</title>

      <Header />

      {/* hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* about*/}
      {/* experience */}
      {/* skills */}
      {/* projects */}
      {/* contact me */}
    </div>
  );
}
