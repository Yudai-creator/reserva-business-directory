import { useEffect, useState } from 'react'
import SupplierInfo from "../components/SupplierInfo";

const BrowseSuppliers = () => {
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
            <h1 className="text-gray-900 font-bold mb-7">Meet the best suppliers in the industry</h1>
            <div className="supplier__info">
                {dataSet.map((data) => (<SupplierInfo bgWhite="bg-white" shadowSm="shadow-sm" rounded="rounded" padding="p-4" data={data} key={data.id}/>))}
                {/* {dataSet.map((data) => (<SupplierInfo graybg="bg-gray-600" data={data} key={data.id}/>))} */}
                
            </div>
        </div>
     );
}
 
export default BrowseSuppliers;