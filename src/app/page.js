import { Hero, Ticker, AboutBook, Stats, AuthorTeaser, Journey, Takeaways, FinalCTA } from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <AboutBook />
      <Stats />
      <AuthorTeaser />
      <Journey />
      <Takeaways />
      <FinalCTA />
    </>
  );
}
