

const SupplierInfo = ({data}) => {

    return ( 
        <div className="text-black">
            <div className="supplier__list_left-column">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-bold">{data.company_name}</h2>
                        <strong className="text-xs">{data.location} {data.business_type}</strong>
                    </div>
                    <img src={data.logo} alt="company logo" />
                </div>  
                
                <p className="text-xs">{data.overview}</p>
                <div className="card__controls">
                    
                </div>
            </div>
          {/* <strong>{data.supplier_commodities.product}</strong> */}
        </div>
     );
}
 
export default SupplierInfo;