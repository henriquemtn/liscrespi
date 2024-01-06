import FadeInOnScroll from '../scripts/fadeInOnScroll';

export default function Formulario() {

    return (
        <section className={`flex justify-center first-letter:text-gray-600 body-font relative`}>
            <FadeInOnScroll>
                <div className="container px-5 py-14 mx-auto rounded-2xl">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto ">
                        <div className="flex flex-wrap -m-2">
                            <form className='space-y-4 px-2 pr-4'>
                                <label htmlFor='nome' className='text-gray-900 font-semibold'>
                                    Nome:
                                </label>
                                <input
                                    type='text'
                                    className='w-full rounded border border-gray-300 focus:border-s7 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                    id='nome'
                                    name='nome'
                                />

                                <label htmlFor='email' className='text-gray-900 font-semibold'>
                                    Email:
                                </label>
                                <input
                                    type='text'
                                    className='w-full rounded border border-gray-300 focus:border-s7 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                    id='email'
                                    name='email'
                                />

                                <label htmlFor='telefone' className='text-gray-900 font-semibold'>
                                    Telefone:
                                </label>
                                <input
                                    type='text'
                                    className='w-full rounded border border-gray-300 focus:border-s7 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                    id='telefone'
                                    name='telefone'
                                />
                                <label htmlFor='mensagem' className='text-gray-900 font-semibold'>
                                    Mensagem:
                                </label>
                                <textarea
                                    className='w-full rounded border border-gray-300 focus:border-s7 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                    id='mensagem'
                                    name='mensagem'
                                />

                                <button onClick={() => {}} className='bg-[#69825F] hover:bg-[#69825F] text-white font-semibold py-2 px-4 rounded-md'>
                                    Enviar mensagem
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </FadeInOnScroll>
        </section>
    )
}