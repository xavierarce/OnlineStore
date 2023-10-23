import PRODUCTS from "../shopdata.json";

import { createContext, useState } from "react";

// Actual value we want to access

export const ProductsContext = createContext({
  products: [],
});

//Data

//Provider
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
  );
};
