interface PaginatedProps {
  itemsPerPage: number;
  itemsTotal: number;
  currentPage: number;
  pages: number;
  setCurrentPage: (i:number) => void;
}
export default function Paginated({
  itemsPerPage,
  itemsTotal,
  currentPage,
  pages,
  setCurrentPage,
}: PaginatedProps) {
  const current = () => {
    const current = itemsPerPage * (currentPage + 1);
    return current > itemsTotal ? itemsTotal : current;
  };
  const next = () => {
    if (currentPage < itemsTotal / itemsPerPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#prev"
          onClick={prev}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Anterior
        </a>
        <a
          href="#next"
          onClick={next}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Siguiente
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <p className="text-sm text-gray-700">
          Mostrando <span className="font-medium">{current()}</span> de{" "}
          <span className="font-medium">{itemsTotal}</span> resultados
        </p>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-xs"
          >
            <a
              href="#prev"
              onClick={prev}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              {"<"}
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {Array.from({ length: pages }, (_, index) => (
              <a
                key={index}
                href={`#${index + 1}`}
                onClick={() => setCurrentPage(index)}
                aria-current={currentPage === index ? "page" : undefined}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  currentPage === index
                    ? "bg-indigo-600 text-white focus-visible:outline-indigo-600"
                    : "text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:outline-offset-0"
                }`}
              >
                {index + 1}
              </a>
            ))}
            <a
              href="#next"
              onClick={next}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              {">"}
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
