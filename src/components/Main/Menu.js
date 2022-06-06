import React, { useState, useEffect, memo } from "react";
import "./Menu.css";
import { debounce } from "lodash";
import { useCallback } from "react";
import ItemContainer from "./ItemContainer";
const Menu = () => {
  const [items, setItems] = useState([]);
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
        let arr = [];
        for (let i = 0; i <= 10; i++) {
          arr.push(data[i])
        }
        setList(arr)
        setCount(10);
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
        setCount((prev) => prev + 10);
      }
    }, 1000),
    []
  );
  const handleScroll = (e) => {
    debounceEvent(e);
  };

  useEffect(() => {
    let arr = [];
        if(count>10 && count<items.length-11){
          for (let i = count + 1; i < count + 10; i++) {
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
          <div className="loader">
            <span>Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Menu);
