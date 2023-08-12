import Image from 'next/image'
import styles from "../styles/globals.css"

export default function Home() {
  return (
   <div className={styles.container}>
      <Head>
        <title>Cretae app</title>
        <meta name = "description" ></meta>
        <link rel= "icon" href="/favicon.ico"></link>
      </Head>
   </div>
  )
}
