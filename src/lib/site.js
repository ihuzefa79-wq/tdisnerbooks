export const AMAZON_URL =
  "https://www.amazon.com/QuiZnos-Entrepreneurial-Story-American-Hottest-ebook/dp/B0HNHDFF9P?dplnkId=c9a01e09-98e0-48fc-89c0-8116789cd6b2&th=1";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/about", label: "About the Author" },
  { href: "/contact", label: "Contact" },
];

export const BOOKS = [
  {
    slug: "whats-a-quiznos",
    title: "What's A QuiZnos?",
    subtitle: "The Entrepreneurial Story of America's Hottest Sub Chain",
    author: "Todd C. Disner",
    cover: "/img/cover.png",
    tagline: "The entrepreneurial journey behind Quiznos.",
    blurb:
      "What's A QuiZnos? is the inspiring true story of how a small idea turned into one of America's most recognizable sub sandwich brands.",
    description: [
      "What's A QuiZnos? is the inspiring true story of how a small idea turned into one of America's most recognizable sub sandwich brands.",
      "Packed with entrepreneurial insight, real-world lessons, and a passion for great food, this book is a must-read for dreamers, business builders, and anyone who believes in the power of hard work.",
    ],
    takeaways: [
      "An inside look at the rise of Quiznos",
      "Entrepreneurial lessons for every dreamer",
      "The power of perseverance",
      "A story of innovation and success",
    ],
    formats: ["Kindle eBook", "Paperback"],
    genre: "Business · Memoir · Entrepreneurship",
    amazon: AMAZON_URL,
  },
];
