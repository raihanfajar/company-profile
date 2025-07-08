import BlogList from "./_components/BlogList";
import Jumbotron from "./_components/Jumbotron";
import { lato } from "@/lib/fonts";
import Hero from "./_components/hero";
import Overview from "./_components/overview";

export default function Home() {
  return (
    <main className={`h-[5000px] ${lato.className}`}>
      <Hero />
      <Overview />
      {/* <BlogList /> */}
    </main>
  );
}