import React, { useEffect } from 'react'
import { CATEGORIES_URL } from '../utils/constant';

const Category = () => {
    const categoryData = async () =>{
        const data = await fetch(CATEGORIES_URL);
        const jsonData = await data.json();
        console.log(jsonData);
    }
    useEffect(() => {
        categoryData();
    });
  return (
    <div>
      
    </div>
  )
}

export default Category
