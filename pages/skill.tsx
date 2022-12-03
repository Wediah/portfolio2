import React from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-scroll"
import Image from "next/image";
import { Element } from 'react-scroll'
import {HiCodeBracket} from 'react-icons/hi2'
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

function Skill() {
    return (
        <Element id="skill" name="skill">
            <div className="in-h-screen px-10 ">
            <h4 className="text-4xl font-bold pt-40 text-center">Skills</h4>
            <h3 className="text-md font-light  text-center">What I can do</h3>
            <div className="gap-10 lg:flex pt-10">
                <div>
                    <span className="flex text-md font-bold text-center"> <HiCodeBracket className="text-2xl mr-2"/>   
                    Frontend Development</span>
                    <div className="flex flex-wrap gap-10">
                       <div> <Image src={html} width={50} alt=""/> </div>
                       <div> <Image src={css} width={50} alt=""/></div>
                       <div> <Image src={javascript}width={50}  alt=""/></div>
                       <div> <Image src={typescript} width={50} alt=""/></div>
                       <div><Image src={jquery} width={50} alt=""/></div>
                       <div><Image src={tailwind} width={50} alt=""/></div>
                       <div><Image src={react} width={50} alt=""/></div>
                       <div><Image src={bootstrap} width={50} alt=""/></div>
                       <div><Image src={next} width={50} height={100} alt=""/></div>
                       <div><Image src={git}  alt=""/></div> 
                    </div>
                </div>
            </div>

            </div>
        </Element>
    );
}

export default Skill;