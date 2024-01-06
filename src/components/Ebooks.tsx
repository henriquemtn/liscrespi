import Minimalismo1 from '../assets/minimalismo1.png'
import Minimalismo2 from '../assets/minimalismo2.png'
import { useEbookModal } from '../hooks/useEbookModal';
import FadeInOnScroll from '../scripts/fadeInOnScroll'

export default function EbooksItem() {
    const ebookModal = useEbookModal();

    const handleEbookClick = () => {
        ebookModal.onOpen();
    };

    return (
        <>
            <section className="flex justify-center py-8 text-gray-600 body-font">
                <div className="w-[1150px] flex items-center">
                    <div className="flex flex-wrap md:-m-4 p-4 md:p-0">
                        <div className="p-4 md:w-1/3">
                            <FadeInOnScroll>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Minimalismo2} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                        <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div className="flex items-center flex-wrap ">
                                            <div onClick={handleEbookClick}>
                                                <a className="text-[#69825F] inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer">Saiba mais
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                R$ 19,90
                                            </span>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </FadeInOnScroll>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <FadeInOnScroll>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Minimalismo1} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                        <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        <div className="flex items-center flex-wrap">
                                            <div onClick={handleEbookClick}>
                                                <a className="text-[#69825F] inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer">Saiba mais
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                R$ 29,90
                                            </span>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" stroke-linecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </FadeInOnScroll>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <FadeInOnScroll>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Minimalismo2} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                        <p className="leading-relaxed mb-3">Descrição exemplo do ebook</p>
                                        <div className="flex items-center flex-wrap ">
                                            <div onClick={handleEbookClick}>
                                                <a className="text-[#69825F] inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer">Saiba mais
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                R$ 39,90
                                            </span>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </FadeInOnScroll>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
