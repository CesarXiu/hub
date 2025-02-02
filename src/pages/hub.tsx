import React from 'react';
import Pagina from '@/interfaces/paginas';
import Image from 'next/image';
export default function Hub() {
    const paginas: Array<Pagina> = [
        {
            "nombre": "Residencias Profesores",
            "url" : "/ResidenciasPro",
            "descripcion" : "Página de residencias profesionales para profesores",
            "icono" : "residenciasMapache.svg"
        },
        {
            "nombre": "Residencias Alumnos",
            "url" : "/ResidenciasFront",
            "descripcion" : "Página de residencias profesionales para alumnos",
            "icono" : "residenciasMapache.svg"
        },
        {
            "nombre": "SIGA",
            "url" : "/SIGA_CLI",
            "descripcion" : "Sistema Integral de Gestion de Acceso",
            "icono" : "residenciasMapache.svg"
        },
    ];
    return (
        <div className="flex flex-col items-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-blue-600 mt-8">Bienvenido al Lobby de servicios WEB del ITCHETUMAL</h1>
            <div className="w-full max-w-4xl mx-auto mt-8">
                <ul className="space-y-4">
                    {
                        paginas.map((pagina: Pagina, index: number) => {
                            return (
                                <li key={index} className="flex items-center justify-between p-4 my-2 bg-white shadow-md rounded-md">
                                    <div>
                                        <h2 className="font-bold text-lg text-gray-800">{pagina.nombre}</h2>
                                        <p className="text-sm text-gray-600">{pagina.descripcion}</p>
                                    </div>
                                    <a href={pagina.url} className="text-blue-500 hover:text-blue-600">
                                        <Image src={"/"+pagina.icono} alt="icono" width="150" height="150" />
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}