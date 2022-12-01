import React from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-scroll"
import Image from "next/image";
import { Element } from 'react-scroll'
import design from "../public/design.png"

function About () {
    return (
        <Element id="about" name="about">
            <div className="min-h-screen px-10 " >
                <h4 className="">Services I offer;</h4>
                <div className="shadow-2xl rounded-2xl text-center p-10 my-10">
                    <h3 className="pt-8 pb-2 text-2xl font-bold">UX Design</h3>
                    <p className="py-2">I love to create result-oriented user experience. My primary goal is to create simple but rich, engaging and innovative user experiences.</p>
                    <h4 className="text-cyan-500 py-4 font-bold">Design tools I use; </h4>
                    <p className="text-gray-800 py-1">Adobe XD</p>
                    <p className="text-gray-800 py-1">Adobe Photoshop</p>
                    <p className="text-gray-800 py-1">Figma</p>
                </div>
                <div className="shadow-2xl rounded-2xl text-center p-10 my-10">
                    <h3 className="pt-8 pb-2 text-2xl font-bold">Front-end Development</h3>
                    <p className="py-2">I'm a meticulus web developer with 6 months of experience in front-end development and passion to build responsive websites which are user freindly.</p>
                    <h4 className="text-cyan-500 py-4 font-bold">Languages and frameworks I use;</h4>
                    <p className="text-gray-800 py-1">HTML, CSS, JavaScript, TypeScript,</p>
                    <p className="text-gray-800 py-1">React, Nextjs, Bootstrap, Tailwindcss & JQuery</p>
                    
                    <h4 className="text-cyan-500 py-4 font-bold">Design tools I use; </h4>
                    <p className="text-gray-800 py-1">Visual Studio Code</p>
                    
                </div>
                <div className="shadow-2xl rounded-2xl text-center p-10 my-10">
                    <h3 className="pt-8 pb-2 text-2xl font-bold"></h3>
                    <p className="py-2">I love to create result-oriented user experience. My primary goal is to create simple but rich, engaging and innovative user experiences.</p>
                    <h4 className="text-cyan-500 py-4 font-bold">Design tools I use; </h4>
                    <p className="text-gray-800 py-1">Adobe XD</p>
                    <p className="text-gray-800 py-1">Adobe Phontoshop</p>
                    <p className="text-gray-800 py-1">Figma</p>
                </div>
            </div>
        </Element>

    );
}

export default About;