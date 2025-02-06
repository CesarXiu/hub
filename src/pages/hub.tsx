"use client";
import Pagina from '@/interfaces/paginas';
import pages from '@/components/pages';
export default function Hub() {

    const paginas: Array<Pagina> = [
        {
            "nombre": "Residencias Profesores y Administrativos",
            "url" : "ResidenciasPro-UI",
            "descripcion" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum exercitationem, quae illum neque quod iure, non error nostrum nesciunt tenetur amet reprehenderit dolor. Animi nostrum voluptatibus minus saepe velit commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum exercitationem, quae illum neque quod iure, non error nostrum nesciunt tenetur amet reprehenderit dolor. Animi nostrum voluptatibus minus saepe velit commodi.",
            "icono" : "residenciasMapache.svg"
        },
        {
            "nombre": "Residencias Alumnos",
            "url" : "/ResidenciasFront",
            "descripcion" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum exercitationem, quae illum neque quod iure, non error nostrum nesciunt tenetur amet reprehenderit dolor. Animi nostrum voluptatibus minus saepe velit commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum exercitationem, quae illum neque quod iure, non error nostrum nesciunt tenetur amet reprehenderit dolor. Animi nostrum voluptatibus minus saepe velit commodi.",
            "icono" : "residenciasMapache.svg"
        },
        {
            "nombre": "SIGA",
            "url" : "/SIGA_CLI",
            "descripcion" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum exercitationem, quae illum neque quod iure, non error nostrum nesciunt tenetur amet reprehenderit dolor. Animi nostrum voluptatibus minus saepe velit commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum exercitationem, quae illum neque quod iure, non error nostrum nesciunt tenetur amet reprehenderit dolor. Animi nostrum voluptatibus minus saepe velit commodi.",
            "icono" : "residenciasMapache.svg"
        },
        {
            "nombre": "Residencias Alumnos",
            "url" : "/ResidenciasFront",
            "descripcion" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum exercitationem, quae illum neque quod iure, non error nostrum nesciunt tenetur amet reprehenderit dolor. Animi nostrum voluptatibus minus saepe velit commodi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum exercitationem, quae illum neque quod iure, non error nostrum nesciunt tenetur amet reprehenderit dolor. Animi nostrum voluptatibus minus saepe velit commodi.",
            "icono" : "residenciasMapache.svg"
        },
        {
            "nombre": "SIGA",
            "url" : "/SIGA_CLI",
            "descripcion" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "icono" : "residenciasMapache.svg"
        },
    ];
    return (
        <div className="flex flex-col items-center">
            <div className="mx-auto mt-8 w-full">
                {pages(paginas)}
            </div>
        </div>
    );
}