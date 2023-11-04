import { useContext } from "react";

import { CategoriesContext } from "../../contexts/Categories.context";

import "./ShopComponent.scss";
import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  // const nose = categoriesMap['hats'].map((las)=>console.log(las))
  // console.log(nose);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview title={title} products={products}/>
      })}
    </div>
  );
};

export default Shop;

{/* <Fragment>
{Object.keys(categoriesMap).map((title) => (
  <Fragment key={title}>
    <h2>{title}</h2>
    <div className="products-container">
      {categoriesMap[title].map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </Fragment>
))}
</Fragment> */}
