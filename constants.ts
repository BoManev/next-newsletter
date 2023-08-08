import { Metadata } from "next";

export const socials = [
  {
    id: 1,
    name: "Twitter",
    url: "https://twitter.com/example",
    handle: "@example",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/example",
    handle: "example",
  },
];

const title = "Example Title";
const description = "Example description";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "https://example.com",
    siteName: "Example Newsletter",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
