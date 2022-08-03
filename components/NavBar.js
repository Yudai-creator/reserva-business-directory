import UserSettings from "./UserSettings";
import SearchBar from "./SearchBar";

const NavBar = () => {
    return ( 
        <div className="navbar__container bg-gray-900 p-3 flex flex-col justify-between">

            <div className="navbar-features flex flex-row justify-between items-center mb-3">
                <div className="flex justify-center items-center">
                    <img className="cursor-pointer" src="https://ik.imagekit.io/u33i3sss0/Reserva_Business_Directory/hamburger-menu-svg_Wxq0wSF-6.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659533793921" alt="hamburger manu" />
                    {/* <img className="w-16" src="https://ik.imagekit.io/u33i3sss0/Reserva_Business_Directory/reserva-fs-logo_j23muE1bz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659533612929" alt="reserva fs logo" /> */}
                </div>

                <input className="hidden h-8 p-2 rounded-sm bg-gray-800" placeholder="Search any products" type="text" />

                <UserSettings/>
            </div>
            
            <SearchBar/>
        </div>
     );
}
 
export default NavBar;