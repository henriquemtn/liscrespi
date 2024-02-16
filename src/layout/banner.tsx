import FadeInOnScroll from '../scripts/fadeInOnScroll';
import cone from '../assets/logocone.png';
import { useNavigate } from 'react-router-dom';

export default function Banner() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/sobre");
    }

    return (
        <div id='home' className="bg-[#69825F] w-full min-h-[717px] py-10 md:py-0 flex md:justify-center items-center">
            <div className='flex justify-between flex-col-reverse gap-5 md:gap-0 md:flex-row items-center  md:w-[1150px] text-[20px] -92'>
                <div className=" w-full px-4 md:px-0 md:w-[800px] md:mr-2 text-center md:pr-10 md:text-left">
                    <FadeInOnScroll>
                        <h1 className='text-white text-[22px] text-center md:text-left'>Autoconhecimento através da criação</h1>
                        <p className='text-white text-center md:text-left font-light pb-4'>Lisandra Crespi</p>
                        <button onClick={handleClick} className='p-4 bg-white rounded-md px-16 font-light text-[#69825F]'>Clique Aqui</button>
                    </FadeInOnScroll>
                </div>
                <div className='bg-white h-[480px] w-[280px] md:w-[380px] flex justify-center items-center rounded-t-full'>
                    <img src={cone} alt="logo" />
                </div>
            </div>
        </div>
    )
}
