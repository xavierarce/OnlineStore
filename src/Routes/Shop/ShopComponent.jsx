import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.Component";
import CategoryComponent from "../Category/CategoryComponent";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryComponent />} />
    </Routes>
  );
};

export default Shop;
