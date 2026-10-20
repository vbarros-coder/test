import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Community from "@/app/components/Community";
import Resources from "@/app/components/Resources";
import Newsletter from "@/app/components/Newsletter";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <Community />
      <Resources />
      <Newsletter />
    </main>
  );
}
