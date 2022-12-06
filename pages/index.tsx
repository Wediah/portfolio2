import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Nav'
import styles from '../styles/Home.module.css'
import Services from './Services'
import Landing from './Landing'
import Portfolio from './portfolio'
import Skill from './skill'
import Experience from './Experience'
import Contact from './contact'
import { useState } from 'react'
import { ReactDOM } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default function Home() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

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
