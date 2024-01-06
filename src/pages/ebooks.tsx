import NavBar from '../layout/navbar'
import EbooksItem from '../components/Ebooks'
import Footer from '../layout/footer'
import EbookModal from '../components/modals/ebookModal'

export default function Ebooks() {
  return (
    <>
    <NavBar />
    <EbookModal />
    <EbooksItem />
    <Footer />
    </>
  )
}
