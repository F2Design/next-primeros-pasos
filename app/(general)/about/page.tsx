// agregar type { Metadata } from "next" para que no de error
import type { Metadata } from "next";

export const metadata: Metadata = {
  // new Date().toString() para que cambie el titulo cada vez que se recargue la pagina
  title: "About Page" + new Date().toString(),
  // title: "About Page",
  description: "SEO Description",
  keywords: ["About Page", "F2 Design", "..."],
};

export default function AboutPage() {
  return (
    // Layout anidado: Quiero poner esta estructura en About y Contact y en el Home Page no quiero se aplique, eso lo hago creando un Layout
    // <main className="flex flex-col items-center p-24">
    //   <span className="text-lg">Hola Mundo</span>
    <span className="text-7xl">About Page</span> // Ahora todas las paginas de la carpeta /general adoptan esta estructura
    // </main>
  );
}
