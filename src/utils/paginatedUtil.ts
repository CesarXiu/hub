import PaginaInterface from '@/interfaces/paginas';
let pages:number = 0;
const paginated = (arrayInterfaces: Array<PaginaInterface>, maxItems: number = 5) => {
    const paginatedArray: Array<Array<PaginaInterface>> = [];
    let i = 0;
    while (i < arrayInterfaces.length) {
        paginatedArray.push(arrayInterfaces.slice(i, i += maxItems));
    }
    pages = paginatedArray.length;
    return paginatedArray;
}

export {paginated, pages};