import React, { useState, useEffect, memo } from "react";
import "./Menu.css";
import { debounce } from "lodash";
import { useCallback } from "react";
import ItemContainer from "./ItemContainer";
import Loader from "../Modal/Loader";
const Menu = () => {
  const [items, setItems] = useState([]);
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch("https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        let arr = [];
        for (let i = 0; i < 12; i++) {
          arr.push(data[i])
        }
        setList(arr)
        setCount(12);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  });

  const debounceEvent = useCallback(
    debounce((e) => {
      
      if (
        e.target.scrollTop + window.innerHeight + 1 >=
        e.target.scrollHeight
      ) {
        setCount((prev) => prev + 11);
      }
    }, 1000),
    []
  );
  const handleScroll = (e) => {

    debounceEvent(e);
  };

  useEffect(() => {
    let arr = [];
        if(count>12 && count<items.length-12){
          for (let i = count+1; i < count + 12; i++) {
                arr.push(items[i]);
              }
            
              setList((prev) => [...prev, ...arr]);
        }
    
  }, [count]);

  return (
    <div className="items-container">
      <div className="menu">
        {list.length > 0 ? (
          <ItemContainer items={list} />
        ) : (
          <Loader />
        )}
      </div>

    </div>
  );
};

export default memo(Menu);
