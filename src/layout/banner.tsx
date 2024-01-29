import FadeInOnScroll from '../scripts/fadeInOnScroll';
import cone from '../assets/logocone.png';
import { useNavigate } from 'react-router-dom';

export default function Banner() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/sobre");
    }

    return (
        <div id='home' className="bg-[#69825F] w-full h-[717px] flex md:justify-center items-center">
        <div className='flex justify-between items-center  md:w-[1150px] text-[20px] -92'>
                <div className="w-[500px] mr-2 text-left md:pr-10"> 
                    <FadeInOnScroll>
                        <h1 className='text-white'>“A psicoterapia propõe te levar ao protagonismo da própria história.”</h1>
                        <p className='text-white font-light pb-4'>Lisandra Crespi</p>
                        <button onClick={handleClick} className='p-4 bg-white rounded-md px-16 font-light text-[#69825F]'>Clique Aqui</button>
                    </FadeInOnScroll>
                </div>
                <div className='bg-white h-[480px] w-[380px] flex justify-center items-center rounded-t-full'>
                    <img src={cone} alt="logo" />
                </div>
            </div>
        </div>
    )
}
