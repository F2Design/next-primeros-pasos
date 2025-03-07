// agregar type { Metadata } from "next" para que no de error
import type { Metadata } from "next";

// mr: snippet para metadata
export const metadata: Metadata = {
  title: "Price Page",
  description: "Price Description",
  keywords: ["Price Page", "Fredy", "..."],
};

export default function PricePage() {
  return (
    <>
      <span className="text-7xl">Price Page</span>
    </>
  );
}
