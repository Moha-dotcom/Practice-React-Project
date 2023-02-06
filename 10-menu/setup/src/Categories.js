import React from 'react';
import Menu from './Menu';

const Categories = ({categories, filterItem}) => {
    return <>
      <div className='btn-container'>
        {categories.map((categorie, index) => {
          return (
            <button className="filter-btn" key={index}
            onClick={() => {filterItem(categorie)}}
            >{categorie}</button>
          )
        })}
       
  
      </div>
      {/* <Menu /> */}
  </>
};

export default Categories;
