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
            <div className="md:pb-8 md:py-8 w-full items-center justify-center flex">
                <Banner />
            </div>
            <TextoSimples 
            titulo="Você está onde a transformação começa"
            conteudo="Se você chegou até aqui, provavelmente você está contemplando alguma mudança na 
            sua vida e está tomando coragem para fazer algo a respeito, ou talvez não saiba muito
             bem por onde começar. A boa notícia é que você está no lugar certo: a melhor maneira
             de desenvolver coragem e iniciar sua jornada de transformação é através da psicologia."
            />
            <TextoRight
            imagem={Minimalismo1}
            titulo="Através da psicoterapia você aprende"
            conteudo="Regular suas emoções e lidar com a ansiedade
            Superar traumas e fantasmas do passado
            Se reconectar com seus propósitos e valores
            Identificar potenciais e fortalecer o self
            Lidar com distorções cognitivas e gatilhos sabotadores
            Criar planos de ação para pequenos e grandes desafios
            Desenvolver relações mais saudáveis
            Quebrar padrões comportamentais e reescrever a própria história"
            />
            <TextoLeft
            imagem={Minimalismo2}
            titulo="Através da psicoterapia você aprende"
            conteudo="Regular suas emoções e lidar com a ansiedade
            Superar traumas e fantasmas do passado
            Se reconectar com seus propósitos e valores
            Identificar potenciais e fortalecer o self
            Lidar com distorções cognitivas e gatilhos sabotadores
            Criar planos de ação para pequenos e grandes desafios
            Desenvolver relações mais saudáveis
            Quebrar padrões comportamentais e reescrever a própria história"
            />
            <TextoSobre
            imagem={LisCrespi}
            titulo="Através da psicoterapia você aprende"
            />
            <Footer />
        </div>
    )
}
