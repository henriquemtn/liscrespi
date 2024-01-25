import FadeInOnScroll from "../scripts/fadeInOnScroll";

interface CustomProps {
    titulo: string,
    conteudo: string,
}

export default function TextoSimples({ titulo, conteudo }: CustomProps) {
    return (
        <div className="w-full flex justify-center items-center md:px-8">
            <FadeInOnScroll>
                <div className="flex justify-center flex-col items-center w-full md:w-[1150px]">
                    <div className="flex flex-col items-center text-center w-full mx-10 text-base md:max-w-[800px] md:py-8 p-4">
                        <h1 className="text-[20px] pb-3">{titulo}</h1>
                        <p className="font-light text-[20px] pb-1">{conteudo}</p>
                    </div>
                    <div className="w-full h-[1px] bg-[#69825F]" />
                </div>
            </FadeInOnScroll>
        </div>
    )
}
