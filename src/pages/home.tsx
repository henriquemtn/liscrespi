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
                titulo="Que bom ter chegado aqui "
                conteudo="A fala e ação são formas que encontramos para trazer cor e sabor a vida, mesmo na relutância em procurar ajuda, mas com a coragem em mãos, são através delas que podemos encontrar novos caminhos e olhar a existência de outra perspectiva e esse processo não ocorrerá sozinho a psicoterapia se encontra como o principal recurso de auxilio."
            />
            <TextoSobre
                imagem={LisCrespi}
                titulo="A profissional"
                color="#69825F"
            />
            <TextoLeft
                imagem={Minimalismo1}
                titulo="A psicoterapia para além do esperado"
                conteudo="O processo terapêutico não está voltado apenas ao auxilio de pessoas que possuem um diagnostico psiquiátrico, mas engloba aspectos mais profundos sobre o relacionamento com o eu, como; autoconhecimento, compreensão dos sentimentos, pensamentos e comportamentos, elaboração de vivencias difíceis, ajuda no desenvolvimento de relações saudáveis, melhora na autoestima, encontro dos valores pessoais, ressignificação da própria historia."
            />
            <TextoRight
                imagem={Minimalismo2}
                titulo="Meu desejo como psicóloga"
            />
            <Footer />
        </div>
    )
}
