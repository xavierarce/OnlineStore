
import React from "react";
import "./categories.styles.scss";
import CategoryItemComponent from "../CategoryItem/CategoryItemComponent"

const categories = [
  {
    id: 1,
    name: "League Of Legends",
    imageUrl:
      "https://img.redbull.com/images/c_crop,x_0,y_172,h_723,w_1607/c_fill,w_1680,h_756/q_auto,f_auto/redbullcom/2019/11/08/fc0f91de-3998-4be5-b50e-96d8d9e0cd45/lol-10-ans-league-of-legends",
  },
  {
    id: 2,
    name: "Waframe",
    imageUrl:
      "https://n9e5v4d8.ssl.hwcdn.net/images/longlanding/warframe-metacard.png",
  },
  {
    id: 3,
    name: "MGS V",
    imageUrl:
      "https://gaming-cdn.com/images/products/1643/orig/metal-gear-solid-v-the-definitive-experience-definitive-edition-pc-jeu-steam-cover.jpg?v=1649865050",
  },
  {
    id: 4,
    name: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    name: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const CategoryDirectory = () => {
  return (
    <div className="directoryContainer">
      {categories.map(({ id, name, imageUrl }) => (
        <CategoryItemComponent key={id} name={name} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
