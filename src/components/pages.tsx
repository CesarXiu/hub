"use client";
import Pagina from "@/interfaces/paginas";
import Image from "next/image";
import { paginated, pages } from "@/utils/paginatedUtil";
import Paginated from "@/components/Paginated";
import { useState } from "react";
export default function Pages(paginas: Array<Pagina>) {
  const itemsPerPage = 3;
  const itemsTotal = paginas.length;
  const paginatedPages: Array<Array<Pagina>> = paginated(paginas, itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const imageSizeOnPhone = 50;
  const imageSizeOnOthers = 125;
  const imageSize = window.innerWidth < 640 ? imageSizeOnPhone : imageSizeOnOthers;
  return (
    <div>
      <hr/>
      <ul className="space-y-4 pb-2 h-full min-h-[515px] max-h-[515px] overflow-hidden">
        {paginatedPages[currentPage].map((pagina: Pagina, index: number) => {
          return (
            <li
              key={index}
              className="items-center justify-between p-4 my-2 bg-white shadow-md rounded-md cursor-pointer hover:bg-sky-200 max-h-[160px] "
              onClick={() => (window.location.href = pagina.url)}
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
                <Image
                  src={"/" + pagina.icono}
                  alt="icono"
                  width={imageSize /*125*/}
                  height={imageSize /*125*/}
                  className="rounded-xl"
                />
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
