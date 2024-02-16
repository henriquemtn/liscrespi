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
            <TextoSimples />
            <TextoSobre
                imagem={LisCrespi}
                titulo="A profissional"
                color="#69825F"
            />
            <TextoLeft
                imagem={Minimalismo1}
                titulo="A psicoterapia para além do esperado"
                conteudo="Com o processo terapêutico podemos adquirir autoconhecimento, compreender sentimentos e pensamentos, elaborar situações difíceis, melhorar a autoestima, identificar os valores pessoais, desenvolver relações saudáveis, adquirir ferramentas para lidar com o diagnostico psiquiátrico, ressignificar a própria história."
            />
            <TextoRight
                imagem={Minimalismo2}
                titulo="Meu papel como psicóloga"
            />
            <Footer />
        </div>
    )
}
