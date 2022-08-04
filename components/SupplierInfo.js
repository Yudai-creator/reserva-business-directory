

const SupplierInfo = ({data}) => {

    return ( 
        <div className="text-black">
          <div className="supplier__list_left-column">
            <div>
                <h2 className="font-bold">{data.company_name}</h2>
                <strong className="text-xs">{data.location} {data.business_type}</strong>
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