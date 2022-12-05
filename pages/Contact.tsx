import React from "react"
import { Element } from 'react-scroll'
import {FaLocationArrow} from 'react-icons/fa'


function Contact () {
    return(
        <Element id='experence' name='experience'>
            <div className="min-h-screen px-10">
                <h4 className="text-4xl font-bold pt-40 text-center">Contact Me</h4>
                <h3 className="text-md font-light  text-center">Get in touch with me</h3>
                <div className=" gap-10 lg:flex pt-10">
                    <div className="shadow-2xl rounded-3xl text-center p-10 my-10 flex-1 bg-gray-100">
                        <div className="text-3xl bg-white rounded-full p-10 justify-center"><FaLocationArrow/></div>
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