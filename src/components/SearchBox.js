import React from 'react';

const SearchBox=({searchchange}) => {
    return (
            
            <input type="search" 
            className="pa2 ba "
            placeholder="Search for robots"
            onChange={searchchange}
            />
    )
}

export default SearchBox;