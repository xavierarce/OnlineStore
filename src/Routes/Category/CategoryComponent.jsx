import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/Categories.context";
import ProductCard from "../../Components/ProductCard/ProductCardComponent";

import "./Category.Styles.scss";

const CategoryComponent = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  console.log(categoriesMap);
  return (
    <div>
      <h2 className="category-title">{category}</h2>
      <div className="category-display">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
