import styles from '../styles/Home.module.css'
// import NavBar from '../components/NavBar'
import { useEffect, useState } from 'react'
import TopSuppliers from '../components/TopSuppliers'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    {/* Home meta tags */}
    <Head>
      <title>Reserva Business Directory</title>
      <meta name='keywords' content='Get to know the suppliers for your business'/>
    </Head>

    {/* Home layout */}
    <div className="home__heading p-3 rounded-t-lg">
      <div className="home__headline relative bg-headline-image  bg-cover bg-no-repeat bg-left-top p-3 w-full h-80">
        <div className="headline__text absolute top-16">
          <h1 className="text-4xl font-bold md:text-6xl">Meet our growers</h1>
          <p className="text-xs md:text-lg">Explore through hundreds of suppliers that you can connect with.</p>
        </div>
      </div>
    
      <div className="home__filter relative w-full p-2 mb-3.5  h-24 bg-white shadow-sm rounded-b-lg">
        <div className={styles.home__filter_heading}>
          <p className="text-gray-800 font-bold text-xs md:text-lg">Explore by product categories</p>
          <Link href="/browse-suppliers">Browse all ˃</Link>
        </div>
      </div>
      <div className="home__suppliers">
        <TopSuppliers/>
      </div>
    </div>
    </>
  )
}


