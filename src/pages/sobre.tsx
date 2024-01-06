import LisCrespi from '../assets/liscrespi.png'
import NavBar from '../layout/navbar'
import TextoSobre from '../components/TextoSobre'
import Footer from '../layout/footer'

export default function Sobre() {
    return (
        <div>
            <NavBar />
            <TextoSobre
                imagem={LisCrespi}
                titulo="Através da psicoterapia você aprende"
            />
            <Footer />
        </div>
    )
}
