import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="home__container p-3 rounded-t-lg">
      {/* <NavBar/> */}

      <div className="home__headline relative bg-headline-image bg-cover bg-no-repeat bg-left-top p-3 w-full h-80">
        <div className="headline__text absolute top-16">
          <h1 className="text-4xl md:text-6xl">Meet our growers</h1>
          <p className="text-xs md:text-lg">Explore through hundreds of suppliers that you can connect with</p>
        </div>
        <div className="home__filter absolute top-72 left-0 w-full p-2  h-24 bg-white shadow-sm rounded-b-lg">
          <div className={styles.home__filter_heading}>
            <p className="text-gray-800 text-xs md:text-lg">Explore by product categories</p>
            <Link href="/browse-suppliers">Browse all ˃</Link>
          </div>
        </div>
      </div>
    </div>
  )
}


