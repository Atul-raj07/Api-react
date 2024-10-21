import React, { useEffect } from "react";
import Nav from "./components/Nav";
import axios from "../utils/Api";

const App = () => {
  const products = async () => {
    

    const products = await axios.get("/products");
    // console.log(products.data);
  };
  useEffect(()=>{
    // console.log(products.data);
    products()
  },[])

  return (
    <>
      App
      <Nav />
      
      <div>
       
      </div>
    </>
  );
};

export default App;
