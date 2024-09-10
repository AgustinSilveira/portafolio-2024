
import React from "react";
import { TypeAnimation } from "react-type-animation";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';



const Main = () => {
    return (
        <div id='main'>
            <img className="w-full h-screen object-cover object-right" src="https://c.pxhere.com/photos/28/6a/dead_sea_timna_red_arava_wide_brown_canyon_cliff-1206881.jpg!d" alt="" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                <h1 className="sm:text-5xl text-4xl  font-bold text-gray-800">Soy Agustín Silveira</h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                <TypeAnimation
                        sequence={[                   
                            'Desarrollador frontend',
                            100, 
                        ]}
                        wrapper="span"
                        speed={75}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                        repeat={Infinity}
                    />
                </h2>
                <h3 className="flex sm:text-2xl text-1xl pt-4 text-gray-800">
                    <TypeAnimation
                        sequence={[                   
                            'Utilizo tecnologías como HTML',
                            400, 
                            'Utilizo tecnologías como CSS',
                            400,
                            'Utilizo tecnologías como JavaScript',
                            600,
                            'Utilizo tecnologías como Bootstrap',
                            400,
                            'Utilizo tecnologías como TypeScript',
                            600,
                            'Utilizo tecnologías como Angular',
                            600
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                        repeat={Infinity}
                    />
                </h3>
                <div id="arrow" className="absolute bottom-14 left-1/2">
                <a href="#projects">
                    <KeyboardDoubleArrowDownIcon id='arrow-index'/>
                    </a>
                </div>


                </div>
            </div>
        </div>
        
    )
}


export default Main