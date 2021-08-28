import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchBar.css';

const SearchBar = (props) => {
    const onInputChange = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className="SearchBar__wrapper">
            <AiOutlineSearch />
            <input
                type="text"
                id="search-bar"
                placeholder="Search users..."
                onChange={onInputChange}
            />
        </div>)
}

export { SearchBar }