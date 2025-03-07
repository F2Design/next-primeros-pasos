// lrc: snippet para crear layout component

import { Navbar } from "@/components";

// Cambio este layout a la carpeta /general para poder usarl la estructura en todas las paginas dentro de la carpeta /general pero asi tengo que acceder a cada pagina usando /general/about, /general/contact, /general/price etc Como hago para que /general no se use en la url y se aplique a todas las paginas de la carpeta /general, se hace usando (general) entre () esto le indica a Next que no se use en la url y se aplique a todas las paginas de la carpeta /general

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Aqui pondre el Navbar */}
      <Navbar />

      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        {/* si uso el children aqui adopta la estructura del page que esta aqui dentro de la carpeta /about  */}
        {children}
      </main>
    </>
  );
}
