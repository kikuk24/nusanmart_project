import CardProducts from "@/components/Card/CardProducts";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Topbar from "@/components/Topbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Topbar />
      <Navbar />
      <section className="max-w-7xl mx-auto">
        <Slider />
        <CardProducts />
      </section>
    </main>
  );
}
