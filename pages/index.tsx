import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Nav'
import styles from '../styles/Home.module.css'
import About from './about'
import Landing from './Landing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar/>
        <Landing/>
        <About/>
      </main>

    </div>
  )
}
