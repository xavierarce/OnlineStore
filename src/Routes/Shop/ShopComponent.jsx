import { useContext } from "react";

import { ProductsContext } from "../../contexts/Products.context";
import ProductCard from "../../Components/ProductCard/ProductCardComponent";

import './ShopComponent.scss'

const Shop = ()=>{
  const {products} = useContext(ProductsContext)
  return (
    <div className="products-container">
      {products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default Shop;