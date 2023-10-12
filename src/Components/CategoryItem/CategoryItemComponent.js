import "./CategoryItem.style.scss";

const CategoryItem = ({  name, imageUrl }) => {
  return (
        <div  className="categoryContainer">
          <div
            className="backgroundImage"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="categoryBodyContainer">
            <h2>{name}</h2>
            <p>Show Now</p>
          </div>
        </div>
  );
};

export default CategoryItem;