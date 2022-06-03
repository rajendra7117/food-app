import React, { useState, useEffect, memo } from "react";
import "./Menu.css";


import ItemContainer from "./ItemContainer";
const Menu = () => {
  const [items, setItems] = useState([]);
  const [list, setList] = useState([])
  // const fetchItems = async () => {
  //     const response = await fetch('https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7')
  //     const data = response.json()
  //     console.log(data)
  // }
  const handleScroll = e => {
    // console.log('w:', window.innerHeight)
    // console.log('st:', e.target.scrollTop )
    // console.log('sh:', e.target.scrollHeight)
   
   if(window.innerHeight+e.target.scrollTop+1 >= e.target.scrollHeight){
 
   }
  }
  useEffect(() => {
    fetch("https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setList([data.splice(0, 20)])
       
      });
  }, []);
  window.addEventListener('scroll', handleScroll, true);
  useEffect(() => {
   console.log(list)
    
  }, [list])


  return (
    <div className="items-container">
      <div className="menu">
        {items.length > 0 ? (
          <ItemContainer items={items} />
        ) : (
          <div className="loader">
         <span>Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Menu);
