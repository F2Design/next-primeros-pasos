// todo es "use server"; a menos que especifique que es "use client"; Es decir todo es creado del lado del servidor, todos los componentes son server componets y pueden ser asincronos, es decir que nos permite poner otros componetes especiales como por ejemplo Loaders, Skeletons, etc. y tambien nos permite hacer llamadas a la API, etc. y todo esto se hace del lado del servidor.

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import path from "path";
import { text } from "stream/consumers";
import { ActiveLink } from "../active-link/ActiveLink";

// export const Navbar = () => {
//   // console.log("Navbar creado"); // Este console.log se muestra en la terminal no se ve en el navegador.

//   return (
//     <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
//       <span className="mr-2">Home</span>

//       <div className="flex flex-1"></div>

//       <a className="mr-2" href="/about">
//         About
//       </a>
//       <a className="mr-2" href="/price">
//         Pricing
//       </a>
//       <a className="mr-2" href="/contact">
//         Contact
//       </a>
//     </nav>
//   );
// };

// todo continua explicacion. Puedo transformar este Navbar en un asyn component, es decir que puedo hacer llamadas a la API, etc. y todo esto se hace del lado del servidor. Para hacerlo async debo importar el componente de la siguiente manera:

// Puedo crear un componente asincrono de la siguiente manera:
// Esta es una funcion que a los 2 segundos me va a devolver un true...1
// const temporalAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 2000);
//   });
// }; // ! Una función que regrese una promesa es un componente asincrono. Y funciona con el await dentro de Navbar

// También puedo crear una cosntante navItems que sera un arreglo con elementos y dentro del return crearlo de manera dinamica con un map de los elementos del arreglo navItems. De esta manera puedo agregar o quitar elementos del menu de navegacion de manera dinamica.
const navItems = [
  { path: "/about", text: "About" },
  { path: "/price", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = async () => {
  // console.log("Navbar creado"); // Este console.log se muestra en la terminal no se ve en el navegador.

  // ...1 usaré la función creada arriba para esperarla con un await de esa funcion creada para generar el componente asíncrono. Lo que hace es que espera 2 segundos y luego me devuelve el componente o carga la página que se esta solicitando.
  // await temporalAsync();

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex flex-row items-center gap-1">
        <HomeIcon />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {/* const navItems, que hace lo mismo que los links independientes que estan comentados abajo */}
      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}

      {/* Link: Cambie el Anchor element a por Link, el Link es un Anchor tag especial y estos links no cargan toda la pagina solo carga el contenido. En el navegadro en Network limpio todo y doy clic en Price por ejemplo, al hacer eso hace una peticion a la siguiente pagina, al siguiente Server Component */}
      {/* <Link className="mr-2" href="/about">
        About
      </Link>
      <Link className="mr-2" href="/price">
        Pricing
      </Link> */}
      {/* Con Anchor tag se carga toda la pagina */}
      {/* <a className="mr-2" href="/contact">
        Contact
      </a> */}
    </nav>
  );
};
