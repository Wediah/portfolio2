import Head from 'next/head'
import Navbar from '../components/Nav'
import Services from './Services'
import Landing from './Landing'
import Portfolio from './portfolio'
import Skill from './skill'
import Experience from './Experience'
import Contact from './Contact'
import { useState, useEffect } from 'react'
import React, { Component} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function Home() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  useEffect(()=>{
    AOS.init({offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,});
  },[])

  

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Head>
        <title>Emmanuel Wediah</title>
        <meta name="description" content="Emmanuel Wediah" />
        <link rel="icon" href="/IMG_E1721.JPG" />
      </Head>

      <main className='bg-white dark:bg-gray-900'>
      
        <Navbar/>
        <Landing/>
        
        <Skill/>
        
        <Services/>

        <Portfolio />
        
        <Experience />

        <Contact />
        
      </main>

    </div>
  )

  
}

