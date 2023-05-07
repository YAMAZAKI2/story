import Styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Info from './info.js'
import Listing from './Listing.js'
const Home = () => {
  return (
    <>
      <Head>
        <title>Storing The Stories</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Info/>
    <Listing/>
   
 
    </>
  )
}

export default Home
    