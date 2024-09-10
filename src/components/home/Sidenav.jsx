import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { CiFileOn } from "react-icons/ci";



const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        console.log('state changed')
    }
    const downloadCV = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = "https://drive.google.com/file/d/1AhkffDAn5tFm-Vc1ODwyf6eJ2tdlQCgg/view?usp=sharing";
        downloadLink.download = "MiCV.pdf";
        downloadLink.click();
    };
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} size={27} className="fixed top-4 right-4 z-[99] md:hidden" />
            {
                nav ? (
                    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                        

                        
                        <a onClick={handleNav} href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"  >
                            <AiOutlineHome size={20} />
                            <span className="pl-4">Inicio</span>
                        </a>
                        <a onClick={handleNav} href="#projects" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                            <AiOutlineProject size={20} />
                            <span className="pl-4">Proyectos</span>
                        </a>
                        <a onClick={handleNav} href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                            <AiOutlineMail size={20} />
                            <span className="pl-4">Contacto</span>
                        </a>
                        <a onClick={handleNav} href="https://www.linkedin.com/in/agus-silveira-85a5b7224" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                            <FaLinkedinIn size={20} />
                            <span className="pl-4">Linkedin</span>
                        </a>
                        <a onClick={handleNav} href="https://github.com/AgustinSilveira" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                            <FaGithub size={20} />
                            <span className="pl-4">Github</span>
                        </a>
                        <button
                            id="button-cv"
                            onClick={downloadCV}
                            title="Descargar mi CV"
                            className="rounded-full shadow-lg bg-gray-100 shadow-gray-350 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                        >
                            <CiFileOn className="cursor-pointer" size={24} />
                            <span className="pl-4">Descargar mi curriculum</span>
                        </button>
                        
                        <div className="flex gap-2 pt-6 max-x-[200px] relative z-10 w-full">
                        </div>
                    </div>

                ) : (
                    ''
                )}
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a href="#main" title="Inicio" className="rounded-full shadow-lg bg-gray-100 shadow-gray-350 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#projects" title="Proyectos" className="rounded-full shadow-lg bg-gray-100 shadow-gray-350 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineProject size={20} />
                    </a>
                    <a href="#contact" title="Envíame un mensaje" className="rounded-full shadow-lg bg-gray-100 shadow-gray-350 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/agus-silveira-85a5b7224" title="Mi linkedin" className="rounded-full shadow-lg bg-gray-100 shadow-gray-350 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn className="cursor-pointer" size={20} />
                    </a>
                    <a href="https://github.com/AgustinSilveira" title="Mi github" className="rounded-full shadow-lg bg-gray-100 shadow-gray-350 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub className="cursor-pointer" size={20} />
                    </a>
                    <button
                        onClick={downloadCV}
                        title="Descargar mi CV"
                        className="rounded-full shadow-lg bg-gray-100 shadow-gray-350 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                        <CiFileOn className="cursor-pointer" size={20} />
                    </button>


                </div>

            </div>
        </div>
    );
};

export default Sidenav;