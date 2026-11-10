import PageHero from "@/components/PageHero";
import AboutView from "@/components/AboutView";

export const metadata = { title: "About the Author | Todd C. Disner" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About the Author"
        eyebrow="The Author"
        title="Meet"
        accent="Todd C. Disner"
        sub="Entrepreneur, storyteller, and business enthusiast."
      />
      <AboutView />
    </>
  );
}
