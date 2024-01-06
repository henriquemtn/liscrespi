import Imagem from '../assets/banner.png'
import FadeInOnScroll from '../scripts/fadeInOnScroll';

export default function Banner() {

    const containerStyle = {
        background: `url(${Imagem}) center/cover`,
    };

    return (
        <div id='home' className="bg-gray-500 w-full md:w-[1150px] h-[417px] flex md:justify-end items-center" style={containerStyle}>
        <div className='flex flex-col justify-center items-end h-full text-[20px] p-4 md:p-0 md:pr-10'>
                <div className="w-full md:w-[500px] mr-2 text-right md:pr-10"> 
                    <FadeInOnScroll>
                        <h1>“A Psicoterapia propõe levar ao encontro de si mesmo, ao centro da própria vida.”</h1>
                        <p className='text-[#69825F] font-light'>Lisandra Crespi</p>
                    </FadeInOnScroll>
                </div>
            </div>
        </div>
    )
}
