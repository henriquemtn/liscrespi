import FadeInOnScroll from "../scripts/fadeInOnScroll";

interface CustomProps {
    titulo?: string,
}

export default function TextoSimples({ titulo }: CustomProps) {
    return (
        <div className="w-full flex justify-center items-center md:px-8">
            <FadeInOnScroll>
                <div className="flex justify-center flex-col items-center w-full md:w-[1150px]">
                    <div className="flex flex-col items-center text-center w-full mx-10 text-base md:py-8 p-4">
                        <h1 className="text-[20px] pb-3">{titulo}</h1>
                        <p className="font-light text-[20px] pb-1">Nos percalços da vida percebemos que damos conta até certo momento, precisamos de coragem para procurar<br></br> ajuda tomando a decisão de nos abrirmos, assim o papel da psicoterapia se faz presente para conquistarmos uma vida leve, espontânea e criativa, nos tornando agente transformador da própria historia.</p>
                    </div>
                    <div className="w-full h-[1px] bg-[#69825F]" />
                </div>
            </FadeInOnScroll>
        </div>
    )
}
