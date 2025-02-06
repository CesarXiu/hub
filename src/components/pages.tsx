"use client";
import Pagina from "@/interfaces/paginas";
import Image from "next/image";
import { paginated, pages } from "@/utils/paginatedUtil";
import Paginated from "@/components/Paginated";
import { useState, useEffect } from "react";
export default function Pages(paginas: Array<Pagina>) {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const itemsPerPage = 3;
  const itemsTotal = paginas.length;
  const paginatedPages: Array<Array<Pagina>> = paginated(paginas, itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [imageSize, setImageSize] = useState(125);
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setImageSize(window.innerWidth < 640 ? 50 : 125);
      }
    };

    handleResize(); // Set initial size
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleClick = (url: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
  };
  return (
    <div>
      <hr/>
      <ul className="space-y-4 pb-2 h-full min-h-[515px] max-h-[515px] overflow-hidden">
        {paginatedPages[currentPage].map((pagina: Pagina, index: number) => {
          return (
            <li
              key={index}
              className="items-center justify-between p-4 my-2 bg-white shadow-md rounded-md cursor-pointer hover:bg-sky-200 max-h-[160px] "
              onClick={() => (
                handleClick(serverUrl+pagina.url)
              )}
            >
              <div className="grid grid-flow-col justify-between gap-4">
                <div
                  className="justify-between overflow-hidden"
                  id="info"
                >
                  <h2 className="font-bold text-sm text-gray-800 uppercase sm:text-lg">
                    {pagina.nombre}
                  </h2>
                  <p className="text-sm text-gray-600 font-mono font-medium h-20 overflow-y-auto ">
                    {pagina.descripcion}
                  </p>
                </div>
                {typeof window !== "undefined" && (
                  <Image
                    src={pagina.icono}
                    alt="icono"
                    width={imageSize}
                    height={imageSize}
                    className="rounded-xl"
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <Paginated
        itemsPerPage={itemsPerPage}
        itemsTotal={itemsTotal}
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> 
    </div>
  );
}
