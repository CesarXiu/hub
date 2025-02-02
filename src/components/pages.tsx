"use client";
import Pagina from "@/interfaces/paginas";
import Image from "next/image";
export default function pages(paginas: Array<Pagina>) {
  return (
    <ul className="space-y-4">
      {paginas.map((pagina: Pagina, index: number) => {
        return (
          <li
            key={index}
            className="flex items-center justify-between p-4 my-2 bg-white shadow-md rounded-md cursor-pointer hover:bg-sky-200"
            onClick={() => (window.location.href = pagina.url)}
          >
            <div className="p-2">
              <h2 className="font-bold text-lg text-gray-800 uppercase">
                {pagina.nombre}
              </h2>
              <p className="text-sm text-gray-600 font-mono font-medium">{pagina.descripcion}</p>
            </div>
              <Image
                src={"/" + pagina.icono}
                alt="icono"
                width="150"
                height="150"
                className="rounded-full"
              />
          </li>
        );
      })}
    </ul>
  );
}
