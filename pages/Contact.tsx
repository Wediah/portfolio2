import React from "react"
import { Element } from 'react-scroll'
import {FaLocationArrow} from 'react-icons/fa'
import Image from "next/image";
import location from '../public/navigation.png'


function Contact () {
    return(
        <Element id='contact' name='contact'>
            <div className="min-h-screen px-10">
                <h4 className="text-4xl font-bold pt-40 text-center">Contact Me</h4>
                <h3 className="text-md font-light  text-center">Get in touch with me</h3>
                <div className=" gap-10 lg:flex pt-10">
                    <div className="shadow-2xl rounded-3xl text-center p-10 my-10 flex-1 bg-gray-100">
                        <Image  
                        src={location}
                        alt=""
                        width={100}
                        height={70}
                        className="mx-auto border-black bg-white rounded-full b p-10" 
                        />
                        
                        <h3 className="pt-8 pb-2 text-3xl font-bold">Address</h3>
                        <h4 className="text-md font-semi-bold">Accra, Ghana</h4>
                    </div>
                    <div className="shadow-2xl rounded-3xl text-center p-10 my-10 flex-1 bg-gray-100">
                    
                    </div>
                    <div className="shadow-2xl rounded-3xl text-center p-10 my-10 flex-1 bg-gray-100">
                    
                    </div>
                </div>

            </div>
        </Element>
    );
}

export default Contact;