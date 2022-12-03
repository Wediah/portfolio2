import React from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-scroll"
import Image from "next/image";
import { Element } from 'react-scroll'
import {HiCodeBracket} from 'react-icons/hi2'

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
                    <div className="flex flex-wrap">
                        
                    </div>
                </div>
            </div>

            </div>
        </Element>
    );
}

export default Skill;