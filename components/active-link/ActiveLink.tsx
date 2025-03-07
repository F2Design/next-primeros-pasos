"use client";

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

// En {} desestructuro el objeto  props y obtengo las propiedades  path y text
export const ActiveLink = ({ path, text }: Props) => {
  // Hook propio de next.js
  const pathName = usePathname();
  const isActive = pathName === path;
  // console.log(pathName); // Muestra la ruta actual en la que estoy

  return (
    <Link
      className={`mr-2 ${
        isActive
          ? "text-blue-500 underline"
          : "text-white hover:text-blue-600 transition-colors duration-200"
      }`}
      href={path}
    >
      {text}
    </Link>
  );
};
