import React, { Fragment } from 'react';
import './search-box.styles.css';

export const SearchBox =({ searchField, handleChange, placeholder }) => {
  return (
    <Fragment>
      <input 
        className='search'
        type='search'
        placeholder={placeholder}
        value={searchField} 
        onChange={handleChange} 
      />
    </Fragment>
  );
}