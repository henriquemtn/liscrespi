import FadeInOnScroll from "../scripts/fadeInOnScroll";

interface CustomProps {
    titulo: string,
    conteudo: string,
    imagem: string,
}

export default function TextoLeft({ titulo, conteudo, imagem }: CustomProps) {
    return (
        <div className="w-full flex justify-center items-center md:px-8">
            <FadeInOnScroll>
                <div className="flex justify-center flex-col items-center w-full md:w-[1150px]">
                    <div className="flex  flex-col md:flex-row gap-5 md:gap-20 md:py-8 p-4 md:p-0">
                        <div className="flex flex-col items-center text-left md:w-1/2">
                            <h1 className="text-[20px] pb-4">{titulo}</h1>
                            <p className="font-light text-[20px]">{conteudo}</p>
                        </div>
                        <img src={imagem} className="w-full md:w-1/2 order-first md:order-last" alt="imagem" />
                    </div>
                    <div className="w-full h-[1px] bg-[#69825F]" />
                </div>
            </FadeInOnScroll>
        </div >
    )
}
