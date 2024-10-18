import React from 'react'
import axios from 'axios';

const sjj = () => {

    const products = async() => {
        const api = "https://fakestoreapi.com/products"

     const products = await  axios.get(api)
     console.log(products);
     
    };

  return (
    <div>
        <button onClick={products}>get products</button>
    </div>
  )
}

export default sjj