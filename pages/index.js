import styles from '../styles/Home.module.css'

import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className="home__container">
      <NavBar/>

      <div className="home__headline relative bg-headline-image bg-cover bg-no-repeat bg-left-top p-3 w-full h-80">
        <div className="headline__text absolute top-16">
          <h1 className="text-4xl">Meet our growers</h1>
          <p className="text-xs">Explore through hundreds of suppliers that you can connect with</p>
        </div>
      </div>
    </div>
  )
}


