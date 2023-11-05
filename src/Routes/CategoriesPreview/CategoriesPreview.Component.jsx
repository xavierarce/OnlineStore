import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/Categories.context";

import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview title={title} products={products}/>
      })}
    </Fragment>
  );
};

export default CategoriesPreview;

