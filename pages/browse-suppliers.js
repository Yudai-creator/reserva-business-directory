
import { useState, useEffect } from "react";
import SupplierInfo from "../components/SupplierInfo";

const browseSuppliers = () => {
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
        <div className="p-3">
            <h1 className="text-gray-900 font-bold">Meet the best suppliers in the industry</h1>
            <div className="supplier__info">
                {dataSet.map((data) => (<SupplierInfo data={data} key={data.id}/>))}
            </div>
        </div>
     );
}
 
export default browseSuppliers;