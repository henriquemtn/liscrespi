import TextoRight from "../components/TextoRight";
import TextoSimples from "../components/TextoSimples";
import Banner from "../layout/banner";
import Navbar from "../layout/navbar";
import Minimalismo1 from '../assets/minimalismo1.png'
import Minimalismo2 from '../assets/minimalismo2.png'
import LisCrespi from '../assets/liscrespi.png'
import TextoLeft from "../components/TextoLeft";
import TextoSobre from "../components/TextoSobre";
import Footer from "../layout/footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <TextoSimples
                conteudo="Olá! Meu nome é Lisandra Izabel Crespi, sou psicóloga clínica (CRP 12/22576) e presto atendimento online a adolescentes e adultos. Minha prática é norteada pela abordagem psicodrama e adoto recursos de arteterapia como ferramenta auxiliadora no desenvolvimento das potencialidades.
                Atualmente curso pós-graduação em Psicodrama (LOCUS) e Neuropsicologia (CENSUPEG)"
            />
            <TextoSobre
                imagem={LisCrespi}
                titulo="A profissional"
                color="#69825F"
            />
            <TextoLeft
                imagem={Minimalismo1}
                titulo="Encontrar quem somos através das sessões"
                conteudo="Meu papel como psicóloga é fornecer um espaço seguro e acolhedor para que possa descobrir as suas potencialidades, recuperar a espontaneidade e criatividade cristalizadas pelas dores, fazendo as pazes consigo e seu processo. Esse momento será seu e a cada sessão se encontrará consigo mesmo (a), estarei disposta a presenciar esse encontro e auxiliar a ter uma vida leve no aqui e agora."
            />
            <TextoRight
                imagem={Minimalismo2}
                titulo="Meu desejo como psicóloga"
            />
            <Footer />
        </div>
    )
}
