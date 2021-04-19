const SearchBar = (search) => (
    <form action="/" method="get" style={searchStyle} className={search}>
        {/* <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label> */}
        <input
            type="text"
            id="header-search"
            placeholder="Search for books"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);

const searchStyle = {
    textAlign: 'center',
    
}

export default SearchBar;