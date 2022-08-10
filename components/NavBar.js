import UserSettings from "./UserSettings";
import SearchBar from "./SearchBar";
import Link from 'next/link'

const NavBar = ({children}) => {
    return ( 
        <>
        <div className="navbar__container relative bg-blue-500 p-3 flex flex-col justify-between">
            
            <div className="navbar-features flex flex-row justify-between items-center mb-3">
                <div className="flex justify-center items-center">
                    <img className="cursor-pointer md:hidden" src="https://ik.imagekit.io/u33i3sss0/Reserva_Business_Directory/hamburger-menu-svg_Wxq0wSF-6.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659533793921" alt="hamburger manu" />
                    <img className="w-28 hidden md:inline" src="https://ik.imagekit.io/u33i3sss0/Reserva_Business_Directory/reserva-fs-logo_j23muE1bz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659533612929" alt="reserva fs logo" />

                    <div className="hidden md:inline">
                        <ul className="flex flex-row justify-between items-center mr-4 ml-4">
                            <li className="mr-3 transition-all ease-in-out duration-200 hover:border-b-2 hover:border-b-white">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="mr-3 transition-all ease-in-out duration-200 hover:border-b-2 hover:border-b-white">
                                <Link href="/browse-suppliers">Browse Suppliers</Link>
                            </li>
                            <li className="mr-3 transition-all ease-in-out duration-200 hover:border-b-2 hover:border-b-white">
                                <Link href="/browse-suppliers">Your Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <input className="hidden md:inline w-1/2 h-10 p-2 rounded-sm bg-blue-600 text-white focus:border-blue-400" placeholder="Search any products" type="text" />

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