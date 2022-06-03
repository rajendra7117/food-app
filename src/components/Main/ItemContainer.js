import React, {memo} from "react";
import "./ItemContainer.css";
import images from "../../lib/Images";
import Item from "./Item";
const ItemContainer = ({ items }) => {
   
  const content = items?.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.item_name}
      price={item.price}
     
      num={Math.floor(Math.random(1, 19) * 10)}
      quantity={0}
    />
  ));
  return <div className="items-grid">{content}</div>;
};

export default memo(ItemContainer);
