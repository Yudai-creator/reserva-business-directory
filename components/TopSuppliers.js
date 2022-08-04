import SupplierInfo from "./SupplierInfo";

const TopSuppliers = () => {
    return ( 
        <>
        <div className="home__top-suppliers relative w-full p-3 bg-white shadow-sm rounded">
            <h1 className="mb-8 text-black font-bold text-lg">Our best suppliers</h1>
            <SupplierInfo/>
        </div>
        </>
     );
}
 
export default TopSuppliers;