import Image from "next/image";
import { Alert } from "flowbite-react";
import HeroSection from "@/components/hero/hero";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <HeroSection />
    </main>
  );
}
