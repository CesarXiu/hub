"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagina from '@/interfaces/paginas';
import Pages from '@/components/pages'; // Importa el componente Pages

export default function Hub() {
    const API_URL = process.env.API_URL;
    const [paginas, setData] = useState<Array<Pagina>>([]);

    useEffect(() => {
        axios.get(API_URL + "pages")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div className="mx-auto mt-8 w-full">
                {/* Llama al componente Pages y pásale la lista de paginas */}
                {paginas.length > 0 ? <Pages paginas={paginas} /> : <p>Loading...</p>}
            </div>
        </div>
    );
}