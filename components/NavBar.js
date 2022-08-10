import UserSettings from "./UserSettings";
import SearchBar from "./SearchBar";
import Link from 'next/link'

const NavBar = ({children}) => {
    return ( 
        <>
        <div className="navbar__container relative bg-blue-500 p-3 flex flex-col justify-between">
            
            <div className="navbar-features flex flex-row justify-between items-center pt-2 pb-2">
                <div className="flex justify-center items-center">
                    <img className="cursor-pointer md:hidden" src="https://ik.imagekit.io/u33i3sss0/Reserva_Business_Directory/hamburger-menu-svg_Wxq0wSF-6.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659533793921" alt="hamburger manu" />
                    <img className="w-28 hidden md:inline" src="https://ik.imagekit.io/u33i3sss0/Reserva_Business_Directory/reserva-fs-logo_j23muE1bz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659533612929" alt="reserva fs logo" />

                    <div className="hidden md:inline">
                        <ul className="flex flex-row justify-between items-center ml-14">
                            <li className="mr-10 relative after:absolute after:top-5 after:right-0 after:w-full after:bg-blue-200 after:h-0.5 after:rounded after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 after:translate-y-2 hover:after:translate-y-0">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="mr-10 relative after:absolute after:top-5 after:right-0 after:w-full after:bg-blue-200 after:h-0.5 after:rounded after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 after:translate-y-2 hover:after:translate-y-0">
                                <Link href="/browse-suppliers">Browse Suppliers</Link>
                            </li>
                            <li className="mr-10 relative after:absolute after:top-5 after:right-0 after:w-full after:bg-blue-200 after:h-0.5 after:rounded after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 after:translate-y-2 hover:after:translate-y-0">
                                <Link href="/browse-suppliers">Your Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <input className="hidden md:inline w-1/2 h-10 p-2 rounded-sm bg-blue-400 text-white placeholder:text-white transition-all ease-in-out duration-200 hover:-translate-y-1 hover:shadow-sm" placeholder="Search any products" type="text" />

                <div className="flex flex-row justify-between items-center">
                    

                    <UserSettings/>
                </div>
                
            </div>
            <SearchBar/>
        </div>
        {children}
        </>
     );
}
 
export default NavBar;