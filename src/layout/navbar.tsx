import { useState } from 'react';
import Logo from '../assets/logo.png';

export default function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div id='nav' className='bg-white'>
            <div className='flex flex-col sm:flex-row justify-between items-center px-4 py-2 lg:px-0 max-w-[1150px] mx-auto'>
                <img src={Logo} alt="Logo" className='h-28 mb-4' />

                <div className='hidden lg:block'>
                    <ul className='lg:flex lg:space-x-6 lg:items-center text-gray-800 font-light text-[18px]'>
                        <li className='hover:text-[#69825F]'>
                            <a href="/">Home</a>
                        </li>
                        <li className='hover:text-[#69825F]'>
                            <a href="/sobre">Sobre</a>
                        </li>
                        <li className='hover:text-[#69825F]'>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIf9is91-01QwOzrGJNrrnupTacoD9TxLNllkJ0UvhQWorVg/viewform" target="_blank">Lista de Espera</a>
                        </li>

                        <li className='hover:text-[#69825F]'>
                            <a href="/ebooks">Ebooks</a>
                        </li>
                        <li className='hover:text-[#69825F]'>
                            <a href="/contato">Contato</a>
                        </li>
                    </ul>
                </div>

                <div className='lg:hidden flex flex-col items-center'>
                    <button
                        className='block text-[#69825F] hover:text-[#69825F] focus:text-[#69825F] focus:outline-none'
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            {navbarOpen ? (
                                <path d='M6 18L18 6M6 6l12 12'></path>
                            ) : (
                                <>
                                    <line x1='4' y1='6' x2='20' y2='6'></line>
                                    <line x1='4' y1='12' x2='20' y2='12'></line>
                                    <line x1='4' y1='18' x2='20' y2='18'></line>
                                </>
                            )}
                        </svg>
                    </button>

                    <ul
                        className={`${navbarOpen ? 'block' : 'hidden'
                            } lg:hidden text-[#69825F] font-light text-[18px] mt-4`}
                    >
                        <li className='border-t border-gray-200'>
                            <a
                                href="/"
                                className='block px-4 py-2 hover:text-gray-600'
                                onClick={() => setNavbarOpen(false)}
                            >
                                Home
                            </a>
                        </li>
                        <li className='border-t border-gray-200'>
                            <a
                                href="/sobre"
                                className='block px-4 py-2 hover:text-gray-600'
                                onClick={() => setNavbarOpen(false)}
                            >
                                Sobre
                            </a>
                        </li>
                        <li className='border-t border-gray-200'>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdIf9is91-01QwOzrGJNrrnupTacoD9TxLNllkJ0UvhQWorVg/viewform" 
                                target="_blank"
                                className='block px-4 py-2 hover:text-gray-600'
                                onClick={() => setNavbarOpen(false)}
                            >
                                Lista de Espera
                            </a>
                        </li>
                        <li className='border-t border-gray-200'>
                            <a
                                href="/ebooks"
                                className='block px-4 py-2 hover:text-gray-600'
                                onClick={() => setNavbarOpen(false)}
                            >
                                Ebooks
                            </a>
                        </li>
                        <li className='border-t border-gray-200'>
                            <a
                                href="/contato"
                                className='block px-4 py-2 hover:text-gray-600'
                                onClick={() => setNavbarOpen(false)}
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
