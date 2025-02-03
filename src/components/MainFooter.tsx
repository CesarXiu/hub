"use client";
import Image from "next/image";
import Footer from "@/interfaces/footer";

interface MainFooterProps {
    Footers: Array<Footer>;
    Absolute?: boolean;
}

export default function MainFooter({ Footers, Absolute }: MainFooterProps) {
    if (Absolute && window.innerWidth <= 640) {
        Absolute = false;
    }
    return (
        <footer
        className={`row-start-3 flex flex-wrap items-center justify-center ${
            Absolute ? "absolute bottom-0 w-full" : ""
          }`}
        >
            {Footers.map((footer: Footer, index: number) => {
                return (
                    <a
                        key={index}
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4 p-2"
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src={footer.icon}
                            alt="File icon"
                            width={16}
                            height={16}
                        />
                        {footer.title}
                    </a>
                );
            })}
        </footer>
    );
}
