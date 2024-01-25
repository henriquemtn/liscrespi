import FadeInOnScroll from "../scripts/fadeInOnScroll"

interface CustomProps {
    titulo: string,
    color: string,
    imagem: string,
}

export default function TextoSobre({ imagem, color }: CustomProps) {
    return (
        <div className="w-full flex justify-center items-center md:px-8">
            <FadeInOnScroll>
                <div className="flex justify-center flex-col items-center w-full max-w-[1150px]">
                    <div className="flex flex-col md:flex-row gap-5 md:gap-20 md:py-8 p-4  md:p-0">
                        <img
                            src={imagem}
                            className="md:h-[550px] w-full md:w-1/2 object-cover"
                            alt="imagem"
                        />
                        <div className="flex flex-col items-center text-left md:w-1/2">
                            <h1 className="text-[20px] pb-4">A psicoterapia para além do esperado</h1>
                            <p className="font-light text-[20px] text-left">
                            Com o processo terapêutico podemos adquirir autoconhecimento, compreender sentimentos e pensamentos, elaborar situações difíceis, melhorar a autoestima, reencontrar os valores pessoais, ajudar no desenvolvimento de relações saudáveis, adquirir ferramentas para lidar com o diagnostico psiquiátrico, ressignificar a própria história.
                            </p>
                        </div>
                    </div>
                    <div className={`w-full h-[1px] bg-[${color}]`} />
                </div>
            </FadeInOnScroll>
        </div >
    )
}
