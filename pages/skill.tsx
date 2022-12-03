import React from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-scroll"
import Image from "next/image";
import { Element } from 'react-scroll'
import {HiCodeBracket} from 'react-icons/hi2'
import {MdWeb} from 'react-icons/md'
import css from '../assets/css.svg'
import bootstrap from '../assets/bootstrap.svg'
import git from '../assets/git.svg'
import html from '../assets/html.svg'
import javascript from '../assets/javascript.svg'
import jquery from '../assets/jquery.svg'
import next from '../assets/nextjs.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import typescript from '../assets/typescript.svg'
import figma from '../assets/figma.svg'
import photo from '../assets/photo.svg'
import xd from '../assets/xd.svg'

function Skill() {
    return (
        <Element id="skill" name="skill">
            <div className="in-h-screen px-10 ">
            <h4 className="text-4xl font-bold pt-40 text-center">Skills</h4>
            <h3 className="text-md font-light  text-center ">What I can do</h3>
            <div className="gap-10 lg:flex">
                <div  className="p-10  my-10 lg:w-3/5">
                    <div className="flex justify-center  text-md font-bold pb-5"> <HiCodeBracket className="text-2xl mr-2"/>   
                    Frontend Development</div>
                    <div className="flex justify-center flex-wrap gap-10 mt-5 lg:flex-row lg:flex-wrap">
                       <div className="text-center"> 
                        <Image src={html} width={50} alt=""  className="pb-2 hover:animate-bounce"/> 
                        <span className="text-md font-serif font-bold">HTML</span> <br />
                        <span className="text-sm text-gray-500">Advanced</span>
                        </div>
                       <div className="text-center"> <Image src={css} width={50} alt="" className="pb-2 hover:animate-bounce" /><span className="text-md font-serif font-bold">CSS</span> <br />
                        <span className="text-sm text-gray-500">Advanced</span> </div>
                       <div className="text-center"> <Image src={javascript}width={50}  alt="" className="pb-3 hover:animate-bounce"/> <span className="text-md font-serif font-bold">JavaScript</span> <br />
                        <span className="text-sm text-gray-500">Intermediate</span></div>
                       <div> <Image src={typescript} width={50} alt="" className="pb-2 hover:animate-bounce"/><span className="text-md font-serif font-bold">TypeScript</span> <br />
                        <span className="text-sm text-gray-500">Basic</span></div>
                       <div className="text-center"> <Image src={jquery} width={50} alt="" className="pb-2 hover:animate-bounce"/><span className="text-md font-serif font-bold">JQuery</span> <br />
                        <span className="text-sm text-gray-500">Basic</span> </div>
                       <div className="text-center"> <Image src={tailwind} width={50} alt="" className="pb-7 hover:animate-bounce"/><span className="text-md font-serif font-bold">Tailwindcss</span> <br />
                        <span className="text-sm text-gray-500">Intermediate</span> </div>
                       <div className="text-center"> <Image src={react} width={50} alt="" className="pb-3 hover:animate-bounce"/><span className="text-md font-serif font-bold">Reat</span> <br />
                        <span className="text-sm text-gray-500">Basic</span> </div>
                       <div className="text-center"> <Image src={bootstrap} width={50} height={100} alt="" className="pb-4 hover:animate-bounce"/><span className="text-md font-serif font-bold">Bootstrap</span> <br />
                        <span className="text-sm text-gray-500">Basic</span> </div>
                       <div className="text-center"> <Image src={next} width={50} height={100} alt="" className="pb-12 hover:animate-bounce"/><span className="text-md font-serif font-bold">Next.js</span> <br />
                        <span className="text-sm text-gray-500">Intermediate</span> </div> 
                       <div className="text-center"> <Image src={git} width={50} height={100}  alt="" className="pb-2 hover:animate-bounce"/><span className="text-md font-serif font-bold">Git</span> <br />
                        <span className="text-sm text-gray-500">Intermediate</span> </div>
                    </div>
                </div>
                <div className="p-10 my-10 lg:w-3/5">
                    <div className="flex justify-center text-md font-bold pb-5"> <MdWeb className="text-2xl mr-2"/>   
                    UX Design</div>
                    <div className="flex justify-center flex-wrap gap-10 mt-5 lg:flex-row lg:flex-wrap">
                       <div className="text-center"> <Image src={figma} width={50} alt="" className="pb-2 hover:animate-bounce"/><span className="text-md font-serif font-bold">Figma</span> <br />
                        <span className="text-sm text-gray-500">Basic</span>  </div>
                       <div className="text-center"> <Image src={xd} width={50} alt="" className="pb-8 hover:animate-bounce"/><span className="text-md font-serif font-bold">Adobe XD</span> <br />
                        <span className="text-sm text-gray-500">Basic</span> </div>
                       <div className="text-center"> <Image src={photo} width={50}  alt="" className="pb-8 hover:animate-bounce"/><span className="text-md font-serif font-bold">Adobe Photoshop</span> <br />
                        <span className="text-sm text-gray-500">Basic</span> </div>
                    </div>
                </div>
            </div>

            </div>
        </Element>
    );
}

export default Skill;