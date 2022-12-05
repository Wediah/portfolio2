import React from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-scroll"
import Image from "next/image";
import { Element } from 'react-scroll'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css'



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
            <div className="min-h-screen px-10 " >
                <h1 className="pt-60 md:pt-80 text-4xl font-bold pb-4 md:text-6xl">
                    Hi, there! <br />
                    I'm Emmanuel Wediah, a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 animate_animated animate_bounce ">UI/UX designer</span> and a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 ">Front-end Engineer</span>. <br />
                </h1>
                <h2 className="font-bold text-slate-500 pb-4 text-md md:text-xl">
                    I'm passionate about helping brands bring imaginations to life right from the capital of Ghana, Accra. <br />
                </h2>

                <button type="button" onClick={onButtonClick} className="bg-cyan-500 p-3 rounded-xl font-bold text-white md:hidden">Download my resume</button>

                
            </div>
        </Element>
        
    );
}

export default Landing;