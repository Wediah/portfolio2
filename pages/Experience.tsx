import React from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-scroll"
import Image from "next/image";
import { Element } from 'react-scroll'
import website from "../public/website.png"
import developer from "../public/developer.png"
import {GoPrimitiveDot} from 'react-icons/go'

function Experience () {
    return(
        <Element id='experence' name='experience'>
            <div className="min-h-screen px-10">
                <h4 className="text-4xl font-bold pt-40 text-center">Experiences</h4>
                <h3 className="text-md font-light  text-center">What I have participated in</h3>
                <div className=" gap-10 lg:flex pt-10">
                    <div className="shadow-2xl rounded-3xl text-center p-10 my-10 flex-1 bg-gray-100">
                        <h4 className="text-2xl font-semibold">Front-end Developer - Intern at <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">CSIR-INSTI</span></h4>
                        <h3 className="text-md font-bold text-cyan-400 pt-2">Oct 2022 - Nov 2022</h3>
                        <h3 className="text-sm font-semibold pt-4">Responsibility</h3>
                        <h5 className="flex text-md pt-1"> <GoPrimitiveDot className="text-xl "/>Maintaining and redesigning code and interfaces respectively. </h5>
                    </div>
                    <div className="shadow-2xl rounded-3xl text-center p-10 my-10 flex-1 bg-gray-100">
                    <h4 className="text-2xl font-semibold">Front-end Developer - Intern at <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">CSIR-INSTI</span></h4>
                        <h3 className="text-md font-bold text-cyan-400 pt-2">Oct 2022 - Nov 2022</h3>
                        <h3 className="text-sm font-semibold pt-4">Responsibility</h3>
                        <h5 className="flex text-md pt-1"> <GoPrimitiveDot className="text-xl text-center"/>Maintaining code. </h5>
                        <h5 className="flex text-md pt-1"> <GoPrimitiveDot className="text-xl text-center"/>Designing and redesigning interfaces. </h5>
                    </div>
                </div>

            </div>
        </Element>
    );
}

export default Experience;