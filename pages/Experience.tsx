import React, {useEffect} from "react"
import { Element } from 'react-scroll'
import {GoPrimitiveDot} from 'react-icons/go'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Experience () {
    return(
        <Element id='experence' name='experience'>
            <div className="min-h-screen px-10 dark:text-white">
                <h4 className="text-4xl font-bold pt-40 text-center">Experiences</h4>
                <h3 className="text-md font-light  text-center">What I have participated in</h3>
                <div className=" gap-10 lg:flex pt-10">
                    <div className="shadow-2xl rounded-3xl text-center p-10 my-10 flex-1 bg-gray-100 dark:bg-gray-800">
                        <h4 className="text-2xl font-semibold">Front-end Developer - <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Freelance</span></h4>
                        <h3 className="text-md font-bold text-cyan-400 pt-2">April 2022 - Present</h3>
                        <h3 className="text-sm font-semibold pt-4">Responsibility</h3>
                        <h5 className="flex text-md pt-1 dark:text-gray-200"> <GoPrimitiveDot className="text-xl text-center dark:text-gray-200 "/>Developing websites for brands. </h5>
                        <h5 className="flex text-md pt-1 dark:text-gray-200"> <GoPrimitiveDot className="text-xl text-center dark:text-gray-200"/>Updating and implementing features in website. </h5>
                    </div>
                    <div className="shadow-2xl rounded-3xl text-center p-10 my-10 flex-1 bg-gray-100 dark:bg-gray-800">
                    <h4 className="text-2xl font-semibold">Front-end Developer - Intern at <a href="http://insti.csir.org.gh/"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">CSIR-INSTI</span></a></h4>
                        <h3 className="text-md font-bold text-cyan-400 pt-2">Oct 2022 - Nov 2022</h3>
                        <h3 className="text-sm font-semibold pt-4">Responsibility</h3>
                        <h5 className="flex text-md pt-1 dark:text-gray-200"> <GoPrimitiveDot className="text-xl text-center dark:text-gray-200"/>Maintaining code. </h5>
                        <h5 className="flex text-md pt-1 dark:text-gray-200"> <GoPrimitiveDot className="text-xl text-center dark:text-gray-200"/>Designing and redesigning interfaces. </h5>
                        <h5 className="flex text-md pt-1 dark:text-gray-200"> <GoPrimitiveDot className="text-xl text-center dark:text-gray-200"/>Testing and debugging websites. </h5>
                    </div>
                </div>

            </div>
        </Element>
    );
}

export default Experience;