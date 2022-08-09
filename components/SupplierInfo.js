import ActionBtn from "./ActionBtn";

const SupplierInfo = ({data}) => {

    return ( 
        <div className="text-black mb-6">
            <div className="supplier_info_columns flex">
                <div className="supplier__info_left-column">

                    {/* Left column supplier info */}
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center">
                            <div>
                                <h2 className="font-bold sm:text-lg">{data.company_name}</h2>
                                <strong className="text-xs sm:text-base text-gray-500">{data.location} {data.business_type}</strong>
                            </div>
                            <figure>
                                <img src={data.logo} alt="company logo" />
                            </figure>
                        </div>
                    </div>  
                    
                    <p className="text-xs font-medium sm:text-base mb-3">{data.overview}</p> 
                </div>

                {/* Right column supplier info */}
                <div className="supplier__info_right-column hidden sm:block text-gray-900">
                    
                </div>
                <div className="supplier__gallery">

                </div>
            </div>
            <div className="card__controls">
                <ActionBtn/>
            </div> 
          {/* <strong>{data.supplier_commodities.product}</strong> */}
        </div>
     );
}
 
export default SupplierInfo;