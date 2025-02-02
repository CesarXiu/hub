import Hub from "@/pages/hub";
import MainFooter from "@/components/MainFooter";
import Footer from "@/interfaces/footer";
export default function Home() {
  const footers:Array<Footer> = [
    {
      "icon": "file.svg",
      "title": "Documentacion"
    },
    {
      "icon": "globe.svg",
      "title": "Registra tu Pagina"
    }
  ];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center text-white mt-8 font-sans">BIENVENIDO AL LOBBY DE SERVICIOS WEB DEL ITCHETUMAL</h1>
      <main className="row-start-2 flex flex-col items-center justify-center w-full">
        <Hub/>
      </main>
    <MainFooter Footers={footers} />
    </div>
  );
}
