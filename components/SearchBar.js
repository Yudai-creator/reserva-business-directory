const SearchBar = ({}) => {
    return ( 
        <div className="search-bar md:hidden flex-shrink-0">
            <input className="min-w-full md:hidden h-8 p-2 rounded-sm bg-blue-400 placeholder:text-blue-300 focus:placeholder:opacity-0" placeholder="Search any products" type="text" />
        </div>
     );
}
 
export default SearchBar;