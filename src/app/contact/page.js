import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact | Todd C. Disner" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in Touch"
        title="Let's talk"
        accent="business."
        sub="Media, speaking, book clubs, or just want to share how the story inspired you? Send a message."
      />
      <ContactForm />
    </>
  );
}
