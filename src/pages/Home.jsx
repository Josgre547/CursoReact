import { useState, useEffect } from "react";
import { getArticulos } from "../lib/articulos.requests";
import { ItemListContainer } from "../components";

export const Home = () => {
  
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {

   getArticulos() 
    .then(res => {
      setIsLoading(false); 
      setProducts(res)}
      ) 

  }, []);



  return (
    <div>
      <div className="container">
        <h1>{isLoading ? "Cargando ..." : ""}</h1>
        <ItemListContainer products={products} />
      </div>
    </div>
  );
};
