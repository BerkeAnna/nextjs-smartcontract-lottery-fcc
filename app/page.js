import Image from 'next/image'
import styles from "../styles/globals.css"
import Head from 'next/head'
import ManualHeader from '../components/ManualHeader'

export default function Home() {
  return (
   <div className={styles.container}>
      <Head>
        <title>Smart contract lottery</title>
        <meta name = "description" content="Our smart contract lottery" ></meta>
        <link rel= "icon" href="/favicon.ico"></link>
      </Head>
      <ManualHeader/>
      Hello!
   </div>
  )
}
