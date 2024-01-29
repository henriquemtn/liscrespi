import FadeInOnScroll from "../scripts/fadeInOnScroll";

interface CustomProps {
    titulo: string,
    imagem: string,
}

export default function TextoRight({ titulo, imagem }: CustomProps) {

    return (
        <div className="w-full flex justify-center items-center md:px-8">
            <FadeInOnScroll>
                <div className="flex justify-center flex-col items-center w-full md:w-[1150px]">
                    <div className="flex  flex-col md:flex-row gap-5 md:gap-20 md:py-8 p-4 md:p-0">
                        <img src={imagem} className="w-full md:w-1/2 order-first md:order-first" alt="imagem" />
                        <div className="flex flex-col items-center text-left md:w-1/2">
                            <h1 className="text-[20px] pb-4">{titulo}</h1>
                            <p className="font-light text-[20px] pb-8">
                                é fornecer um espaço seguro, ético e acolhedor para que possa descobrir as suas potencialidades, recuperar a espontaneidade, encontrar seus limites fazendo as pazes consigo, vivenciando seu processo único de forma segura. Esse momento será seu e a cada sessão se encontrará consigo mesmo (a), você poderá falar o que for confortável e estarei disposta a presenciar esse encontro. <br /><br />

                                Para agendar sua sessão basta preencher o formulário disponível nesse site e assim que possível terei o prazer de entrar em contato para conversarmos.</p>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIf9is91-01QwOzrGJNrrnupTacoD9TxLNllkJ0UvhQWorVg/viewform" className='p-4 bg-[#69825F] rounded-md px-16 font-light text-white'>AGENDE</a>
                        </div>
                    </div>
                </div>
            </FadeInOnScroll>
        </div >
    )
}
