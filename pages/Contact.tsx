import React from "react"
import { Element } from 'react-scroll'
import {FaLocationArrow} from 'react-icons/fa'
import Image from "next/image";
import location from '../public/cursor.png'
import mail from '../public/email.png'
import call from '../public/phone-call.png'
import {FiGithub, FiInstagram, FiTwitter} from 'react-icons/fi'
import {AiOutlineLinkedin, AiOutlineWhatsApp} from 'react-icons/ai'



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
                        className="mx-auto  outline " 
                        />
                        
                        <h3 className="pt-8 pb-2 text-3xl font-bold">Address</h3>
                        <h4 className="text-md font-semi-bold">Accra, Ghana</h4>
                    </div>
                    <div className="shadow-2xl rounded-3xl text-center p-10 my-10 flex-1 bg-gray-100">
                    <Image  
                        src={mail}
                        alt=""
                        width={100}
                        height={70}
                        className="mx-auto" 
                        />
                        
                        <h3 className="pt-8 pb-2 text-3xl font-bold">Email</h3>
                        <a href="mailto:emmanuelwediah@gmail.com"><h4 className="text-md font-semi-bold">emmanuelwediah@gmail.com</h4></a>
                    </div>
                    <div className="shadow-2xl rounded-3xl text-center p-10 my-10 flex-1 bg-gray-100">
                        
                    <Image  
                        src={call}
                        alt=""
                        width={100}
                        height={70}
                        className="mx-auto" 
                        />
                        
                        <h3 className="pt-8 pb-2 text-3xl font-bold">Phone</h3>
                        <h4 className="text-md font-semi-bold">(+233) 20 486 8516</h4>
                        <h4 className="text-md font-semi-bold">(+233) 30 244 5306</h4>
                    </div>
                </div>

                <div className="flex text-3xl gap-5 justify-center pt-10">
                    <a href="https://www.linkedin.com/in/wediah-emmanuel-578330230"><AiOutlineLinkedin className="hover:transition hover:-translate-y-2 duration-300 delay-150"/></a>
                    <a href="https://github.com/Wediah"><FiGithub className="hover:transition hover:-translate-y-2 duration-300 delay-150"/></a>
                    <a href="https://www.instagram.com/_wediah/"><FiInstagram className="hover:transition hover:-translate-y-2 duration-300 delay-150"/></a>
                    <a href="https://twitter.com/WediahE"><FiTwitter className="hover:transition hover:-translate-y-2 duration-300 delay-150"/></a>
                    <a href="https://wa.me/message/DGI7R7QWOUTAJ1"><AiOutlineWhatsApp className="hover:transition hover:-translate-y-2 duration-300 delay-150"/></a>
                </div>
                <div className="text-center pb-5 font-medium text-md">© Copyright Wediah Emmanuel. All rights reserved</div>

            </div>
        </Element>
    );
}

export default Contact;