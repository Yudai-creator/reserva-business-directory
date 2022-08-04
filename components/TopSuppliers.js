import SupplierInfo from "./SupplierInfo";
import { useState, useEffect } from "react";

const TopSuppliers = () => {

    const [dataSet, setData] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
        const res = await fetch('http://localhost:5000/suppliers_data')
        const dataSet = await res.json()

        setData(dataSet)
        }

        fetchData()
    }, [])

    return ( 
        <>
        <div className="home__top-suppliers relative w-full p-3 bg-white shadow-sm rounded">
            <h1 className="mb-8 text-black font-bold text-lg">Our best suppliers</h1>
            {dataSet.map((data) => (<SupplierInfo data={data} key={data.id}/>))}
        </div>
        </>
     );
}
 
export default TopSuppliers;