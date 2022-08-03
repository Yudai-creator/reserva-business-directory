const SearchBar = () => {
    return ( 
        <div className="search-bar flex-shrink-0">
            <input className="min-w-full md:hidden h-8 p-2 rounded-sm bg-gray-800" placeholder="Search any products" type="text" />
        </div>
     );
}
 
export default SearchBar;