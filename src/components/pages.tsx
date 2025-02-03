"use client";
import Pagina from "@/interfaces/paginas";
import Image from "next/image";
import paginated from "@/utils/paginatedUtil";
export default function pages(paginas: Array<Pagina>) {
  const paginatedPages: Array<Pagina> = paginated(paginas, 3);
  return (
    <div>
      <ul className="space-y-4">
        {paginatedPages[0].map((pagina: Pagina, index: number) => {
          return (
            <li
              key={index}
              className="flex items-center justify-between p-4 my-2 bg-white shadow-md rounded-md cursor-pointer hover:bg-sky-200"
              onClick={() => (window.location.href = pagina.url)}
            >
              <div className="p-2 flex flex-row justify-between gap-4">
                <div
                  className="flex flex-col justify-between overflow-hidden"
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
                  width={125}
                  height={125}
                  className="object-contain sm:rounded-xl"
                />
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Mostrando{" "}
              <span className="font-medium">3</span> de{" "}
              <span className="font-medium">5</span> resultados
            </p>
          </div>
          <div>
            <nav
              aria-label="Pagination"
              className="isolate inline-flex -space-x-px rounded-md shadow-xs"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                {"<"}
              </a>
              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                3
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                {">"}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
