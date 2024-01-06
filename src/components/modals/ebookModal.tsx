import { useState } from "react";
import Modal from "../Modal";
import { useEbookModal } from "../../hooks/useEbookModal";
import Minimalismo1 from '../../assets/minimalismo1.png'

const EbookModal = () => {
    const [isLoading] = useState(false);
    const ebookModal = useEbookModal();

      const bodyContent = (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-10">
                <img src={Minimalismo1} className="w-full md:w-1/2" alt="Imagem do ebook" />
                <div className="text-base pb-4">
                    <p>Foco nas práticas em saúde mental, reúne neste volume quatorze artigos que abordam algumas das possibilidades metodológicas do saber psicológico.<br/><br/>
                        A psicologia enquanto ciência retoma muitas iniciativas tanto da filosofia quanto da fisiologia, que desde a antiguidade tenta se ocupar, com reservas, das tramas, conflitos, funcionamento e atitudes internas e “mentais” do homem.
                    </p>
                    <h1 className="text-[#424242]">R$ 19,90</h1>
                </div>
            </div>
        </div>
    );

    const footerContent = (
        <div>

        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={ebookModal.isOpen}
            title="Titulo do ebook"
            actionLabel="Comprar"
            onClose={ebookModal.onClose}
            onSubmit={() => { }}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default EbookModal;
