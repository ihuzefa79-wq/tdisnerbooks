import { notFound } from "next/navigation";
import { BOOKS } from "@/lib/site";
import BookDetail from "@/components/BookDetail";

export function generateStaticParams() {
  return BOOKS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const b = BOOKS.find((x) => x.slug === slug);
  return { title: b ? `${b.title} | Todd C. Disner` : "Book not found" };
}

export default async function BookPage({ params }) {
  const { slug } = await params;
  const book = BOOKS.find((b) => b.slug === slug);
  if (!book) notFound();
  return <BookDetail book={book} />;
}
