import icone from '../assets/icon.png'
import FadeInOnScroll from '../scripts/fadeInOnScroll'

export default function Footer() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full h-[1px] bg-[#69825F]" />
            <div className="flex flex-col justify-center items-center md:flex-row w-full max-w-[1150px] md:justify-between text-black py-8">
                <div className="w-[280px] text-center md:text-left mb-6 md:mb-0">
                    <FadeInOnScroll>
                        <h1>CONTATO</h1>
                        <p className='font-light'>
                            Lisandra Crespi CRP 12/22576<br />
                            (47) 9 9663-3318<br />
                            crespilisandra@gmail.com
                        </p>
                    </FadeInOnScroll>
                </div>
                <div className="w-[280px] text-center md:text-left mb-6 md:mb-0">
                    <FadeInOnScroll>
                        <h1>LOCALIZAÇÃO</h1>
                        <p className='font-light'>
                            R. 3000, 843 - Centro, Balneário Camboriú - SC, 88330-336<br />
                            Seg - Sex 09 as 20h<br />
                        </p>
                    </FadeInOnScroll>
                </div>
                <div className="w-[280px] text-center md:text-left">
                    <FadeInOnScroll>
                        <h1>PAGAMENTO</h1>
                        <p className='font-light'>
                            Pix Chave:<br />
                            crespilisandra@gmail.com<br />
                        </p>
                    </FadeInOnScroll>
                </div>
            </div>
            <div className="w-full flex justify-center py-8 bg-[#FFFDF7]">
                <FadeInOnScroll>
                    <div className="w-full md:w-[1150px] flex items-center sm:flex-row flex-col">
                        <img src={icone} alt="" />
                        <p className="text-sm text-[#69825F] sm:ml-6 sm:mt-0 mt-4">© 2024 Lisandra Crespi —
                            <a href="https://www.instagram.com/psi.crespilis/" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@psi.crespilis</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="text-[#69825F]">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>

                            <a className="ml-3 text-[#69825F]">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-[#69825F]">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </FadeInOnScroll>
            </div>
        </div >
    )
}
