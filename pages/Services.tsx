import React from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-scroll"
import Image from "next/image";
import { Element } from 'react-scroll'
import website from "../public/website.png"
import developer from "../public/developer.png"

function Services () {
    return (
        <Element id="services" name="services">
            <div className="min-h-screen px-10 " >
                <h4 className="text-4xl font-bold pt-40 text-center">Services</h4>
                <h3 className="text-md font-light  text-center">What I offer</h3>
                <div className=" gap-10 lg:flex pt-10">
                    <div className="shadow-2xl rounded-3xl text-center p-10 my-10 flex-1 hover:outline hover:outline-2 hover:outline-gray-500 hover:outline-offset-4 bg-gray-100">
                        <Image className="mx-auto " src={website} width={100} height={100} alt=""/>
                        
                        <h3 className="pt-8 pb-2 text-2xl font-bold">UX Design</h3>
                        <p className="py-2">I love to create result-oriented user experience. My primary goal is to create simple but rich, engaging and innovative user experiences.</p>
                        
                    </div>
                    <div className="shadow-2xl rounded-2xl text-center p-10 my-10 flex-1 hover:outline hover:outline-2 hover:outline-gray-500 hover:outline-offset-4 bg-gray-100">
                        <Image className="mx-auto" src={developer} height={100} width={100} alt=""/>

                        <h3 className="pt-8 pb-2 text-2xl font-bold">Front-end Development</h3>
                        <p className="py-2">I'm a meticulus web developer with 6 months of experience in front-end development and passion to build responsive websites which are user freindly.</p>
                    </div>
                </div>
            </div>
        </Element>

    );
}

export default Services;