const Search = ({ onChange, value }) => {
    console.log("SEARCH", value);
    return (
        <input
            value={value}
            onChange={onChange}
            type='text'
            name='username'
            id='username'
            className='text-center focus-within:none bg-inherit p-3 text-gray-300 focus:outline-none md:text-base  sm:text-sm border border-[#6e7681] rounded-md lg:w-1/2 w-full'
            placeholder='Search for a user'
        />
    );
};

export default Search;
