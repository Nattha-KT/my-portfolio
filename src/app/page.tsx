import { About, Hero, Services } from "@/components/features";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <About/>
      <Services/>
    </main>
  );
}
