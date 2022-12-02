import React from "react"
import { Transition } from '@headlessui/react'
import { Link } from "react-scroll"
import Image from "next/image";
import { Element } from 'react-scroll'
import inter1 from '../public/inter1.png'
import inter2 from '../public/inter 2.png'
import inter3 from '../public/08th Nov.png'

import eng from '../public/eng.png'

function Portfolio () {
    return (
        <Element id="portfolio" name="portfolio">
            
            <div className="min-h-screen px-10">
             <h4 className="text-4xl font-bold pt-40">Portifolio</h4>
                <div className="flex flex-col py-10 gap-10 lg:flex-row lg:flex-wrap">
                    <div className="basis-1/3 flex-1">
                        <Image alt="" src={inter1} className="rounded-lg object-cover" width={"100"}  height={'100'} layout="responsive"/>
                    </div>
                    <div className="basis-1/3 flex-1">
                        <Image alt=""  src={inter2} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive"/>
                    </div>
                    <div className="basis-1/3 flex-1">
                        <Image alt=""  src={inter3} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive"/>
                    </div>
                    <div className="basis-1/3 flex-1 ">
                     <Image alt=""  src={eng} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive"/>
                     
                    </div>
                </div>
                

            </div>
        </Element>
    );
}

export default Portfolio;