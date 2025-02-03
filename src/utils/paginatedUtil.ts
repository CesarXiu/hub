import PaginaInterface from '@/interfaces/paginas';
const paginated = (arrayInterfaces: Array<PaginaInterface>, maxItems: number = 5) => {
    const paginatedArray: Array<Array<PaginaInterface>> = [];
    let i = 0;
    while (i < arrayInterfaces.length) {
        paginatedArray.push(arrayInterfaces.slice(i, i += maxItems));
    }
    return paginatedArray;
}

export default paginated;