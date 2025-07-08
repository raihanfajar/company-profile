import BlogList from "./_components/BlogList";
import Jumbotron from "./_components/Jumbotron";
import { lato } from "@/lib/fonts";
import Hero from "./_components/hero";
import Overview from "./_components/overview";
import Services from "./_components/services";
import Testimony from "./_components/testimony";

export default function Home() {
  return (
    <main className={`${lato.className}`}>
      <Hero />
      <Overview />
      <Services />
      <Testimony />
      {/* <BlogList /> */}
    </main>
  );
}