import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

//importar as paginas
import Home from "../pages/home"
import ErrorPage from "../pages/errorpage"
import Sobre from "../pages/sobre"
import Ebooks from "../pages/ebooks"
import Contato from "../pages/contato"


export default function RouterManager() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/ebooks" element={<Ebooks />}/>
            <Route path="/contato" element={<Contato />}/>
            <Route path="/404" element={<ErrorPage />}/>
            <Route path="*" element={<Navigate to="/404" />}/>
        </Routes>
    </Router>
  )
}