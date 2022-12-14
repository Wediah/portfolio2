import React from "react"
import Image from "next/image";
import { Element } from 'react-scroll'
import inter1 from '../public/inter1.png'
import inter2 from '../public/inter 2.png'
import inter3 from '../public/08th Nov.png'
import tour from '../public/tour.png'
import ad from '../public/ad.png'
import {AiOutlineArrowRight} from 'react-icons/ai'

import eng from '../public/eng.png'

function Portfolio () {
    return (
        <Element id="portfolio" name="portfolio">
            
            <div className="min-h-screen px-10 dark:text-white">
             <h4 className="text-4xl font-bold pt-40 text-center">Portifolio</h4>
             <h3 className="text-md font-light  text-center">What I have done</h3>
                <div className="flex flex-col py-10 gap-10 lg:flex-row lg:flex-wrap">
                    <div className="basis-1/3 flex-1">
                        <Image alt="" src={inter1} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
                        <h3 className="font-medium text-2xl">UX/UI Design</h3>
                        <h3 className="font-medium text-md dark:text-gray-200">Modern Website</h3>
                    </div>
                    <div className="basis-1/3 flex-1">
                        <Image alt=""  src={inter2} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive"/>

                        <h3 className="font-medium text-2xl">UX/UI Design</h3>
                        <h3 className="font-medium text-md dark:text-gray-200">Modern Website</h3>
                    </div>
                    <div className="basis-1/3 flex-1">
                        <Image alt=""  src={inter3} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive"/>
                        
                        <h3 className="font-medium text-2xl">UX/UI Design</h3>
                        <h3 className="font-medium text-md dark:text-gray-200">Ecommerce shop</h3>
                    </div>
                    <div className="basis-1/3 flex-1 ">
                     <Image alt=""  src={eng} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive"/>

                     <h3 className="font-medium text-2xl">Web</h3>
                     <h3 className="font-medium text-md dark:text-gray-200">Modern Website</h3>
                     <a href="https://www.engecgroup.xyz/" ><button className="group/edit flex text-sm mt-4 bg-gray-100 p-2 rounded-full dark:bg-gray-800">Live demo<AiOutlineArrowRight className="text-xl ml-2 group-hover/edit:translate-x-2.5"/> </button></a>
                    </div>
                    <div className="basis-1/3 flex-1 ">
                     <Image alt=""  src={tour} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive"/>

                     <h3 className="font-medium text-2xl">Web</h3>
                     <h3 className="font-medium text-md dark:text-gray-200">Modern Website</h3>
                     <a href="https://tourismpage.vercel.app/" ><button className="group/edit flex text-sm mt-4 bg-gray-100 p-2 rounded-full dark:bg-gray-800 ">Live Demo<AiOutlineArrowRight className="text-xl ml-2 group-hover/edit:translate-x-2.5"/> </button></a>
                    </div>
                    <div className="basis-1/3 flex-1 ">
                     <Image alt=""  src={ad} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive"/>

                     <h3 className="font-medium text-2xl">Web</h3>
                     <h3 className="font-medium text-md dark:text-gray-200">Modern Website</h3>
                     <a href="https://ad-eight.vercel.app/" ><button className="group/edit flex text-sm mt-4 bg-gray-100 p-2 rounded-full dark:bg-gray-800 ">Live Demo<AiOutlineArrowRight className="text-xl ml-2 group-hover/edit:translate-x-2.5"/> </button></a>
                    </div>
                </div>
                

            </div>
        </Element>
    );
}

export default Portfolio;