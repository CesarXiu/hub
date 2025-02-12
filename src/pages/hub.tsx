"use client";
import Pagina from '@/interfaces/paginas';
import pages from '@/components/pages';
export default function Hub() {

    const paginas: Array<Pagina> = [
        {
            "nombre": "Sistema Integral de Residencias Profesionales (Profesores y Administrativos)",
            "url" : "ResidenciasPro-UI",
            "type": "http",
            "descripcion" : "Es una plataforma diseñada para gestionar y optimizar el proceso de asignación, supervisión y evaluación de proyectos de residencias profesionales en instituciones educativas. Permite a profesores y administrativos llevar un control eficiente de estudiantes, empresas, avances, reportes y evaluaciones, facilitando la comunicación y el cumplimiento de los requisitos académicos.",
            "icono" : "residenciasMapache.svg"
        },
        {
            "nombre": "Sistema Integral de Residencias Profesionales (Alumnos)",
            "url" : "ResidenciasFrontEnd",
            "type": "https",
            "descripcion" : "Es una plataforma diseñada para que los estudiantes se postulen a proyectos, soliciten su residencia profesional y gestionen todo el proceso de manera eficiente. Permite subir su anteproyecto, descargar documentación clave como la solicitud de residencia, anexos (evaluación de seguimiento y reporte final), y facilita su evaluación final en el sistema de servicios escolares.",
            "icono" : "residenciasMapache.svg"
        },
        {
            "nombre": "Sistema Integral de Gestion de Accesos",
            "type": "http",
            "url" : "SIGA_CLI",
            "descripcion" : "Es una plataforma institucional que permite a los usuarios solicitar y gestionar accesos a información del Sistema Integral de Información. Facilita la administración de permisos, garantiza un control eficiente de las solicitudes y contribuye a la seguridad y organización de los datos institucionales.",
            "icono" : "siga.svg"
        },
        {
            "nombre": "Api del Sistema Integral de Información",
            "type": "http",
            "url" : "ApiSii/public/api/documentation",
            "descripcion" : "Interfaz diseñada para ofrecer acceso seguro y eficiente a los datos institucionales. Permite la integración de aplicaciones y servicios mediante el consumo de información clave, facilitando procesos automatizados, consultas de datos y la interoperabilidad entre sistemas dentro de la organización.",
            "icono" : "api.svg"
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
