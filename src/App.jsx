import React from "react";
import Nav from "./components/Nav";
import axios from "./utils/Api";

const App = () => {
  const products = async () => {
    const api = "/products";

    const products = await axios.get(api);
    console.log(products.data);
  };

  return (
    <>
      App
      <Nav />
      
      <div>
        <button onClick={products}>get products</button>
      </div>
    </>
  );
};

export default App;
