import SupplierInfo from "./SupplierInfo";

const TopSuppliers = () => {
    return ( 
        <>
        <div className="home__top-suppliers relative w-full h-28 p-3 bg-white shadow-sm rounded-sm">
            <h1 className="text-black font-bold text-lg">Our best suppliers</h1>
            <SupplierInfo/>
        </div>
        </>
     );
}
 
export default TopSuppliers;