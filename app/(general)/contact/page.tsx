// agregar type { Metadata } from "next" para que no de error
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact Description",
  keywords: ["Contact Page", "Fredy", "..."],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
