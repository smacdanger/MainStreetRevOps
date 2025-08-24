import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - MainStreet RevOps",
  description: "Get in touch with MainStreet RevOps to discuss your sales process optimization needs. Schedule a discovery call or send us a message.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}