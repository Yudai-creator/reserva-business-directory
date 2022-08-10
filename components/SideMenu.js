import Link from 'next/link'

const SideMenu = () => {
    return ( 
        <div className="side-menu bg-gray-300 p-3 w-52 h-screen absolute z-10 hidden md:inline">
            <h2 className="text-gray-900 font-bold">Features</h2>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/browse-suppliers">Browse Suppliers</Link>
                </li>
                <li>
                    <Link href="/browse-suppliers">Your Profile</Link>
                </li>
            </ul>
        </div>
    );
}
 
export default SideMenu;