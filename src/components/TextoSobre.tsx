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
                            <h1 className="text-[20px] pb-4">A profissional</h1>
                            <p className="font-light text-[20px] text-left">
                                Meu nome é Lisandra, sou psicóloga clínica (CRP 12/22576) e presto atendimento a adolescentes e adultos na modalidade online e presencial em Balneário Camboriú, minha prática é norteada pela abordagem psicodrama e arteterapia. <br /><br />
                                Atualmente curso pós-graduação em Psicodrama e formação em Psicopatologia. Me especializo no atendimento de pacientes com transtorno de humor e personalidade, acolhendo também as demais demandas clínicas. <br /><br />
                                Através da psicoterapia podemos desenvolver nossa espontaneidade e adquirirmos autoconhecimento, resgatando a saúde mental a partir do processo dinâmico e criativo dos atendimentos. <br /><br />
                                Para agendar sua sessão há um link disponível de lista de espera, assim que possível entrarei em contato e estaremos conversando.
                            </p>
                        </div>
                    </div>
                    <div className={`w-full h-[1px] bg-[${color}]`} />
                </div>
            </FadeInOnScroll>
        </div >
    )
}
