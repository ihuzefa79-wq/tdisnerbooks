import BooksView from "@/components/BooksView";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Books | What's A QuiZnos?" };

export default function BooksPage() {
  return (
    <>
      <PageHero
        crumb="Books"
        eyebrow="The Bookshelf"
        title="Stories built on"
        accent="hustle & heart."
        sub="Real lessons from the front lines of building one of America's most recognizable sandwich brands."
      />
      <BooksView />
    </>
  );
}
