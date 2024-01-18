import React from "react"
import { Element } from 'react-scroll'
import 'animate.css'
import Rive from "@rive-app/react-canvas"



function Landing () {

    const onButtonClick = () => {
        fetch('WediahEmmanuelresume.docx').then(response => {
            response.blob().then(blob => {

                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'WediahEmmanuelresume.docx';
                alink.click();
            })
        })
    }

    return (
        <Element id="home" name="home">
            <div className="min-h-screen px-10 cursor-default" >
                <h1 className="pt-60 md:pt-80 text-4xl font-bold pb-4 md:text-6xl dark:text-white">
                    Hi, there! <br />
                    I&apos;m Emmanuel Wediah, a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 ">Front-end Engineer</span>. <br />
                </h1>
                <h2 className="font-bold text-slate-500 pb-4 text-md md:text-xl dark:text-slate-200">
                    I&apos;m passionate about helping brands bring imaginations to life, right from the capital of Ghana, Accra. <br />
                </h2>

                <button type="button" onClick={onButtonClick} className="bg-cyan-500 p-3 rounded-xl font-bold text-white md:hidden">Download my resume</button>

                
            </div>
        </Element>
        
    );
}

export default Landing;