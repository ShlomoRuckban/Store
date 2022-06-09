import React, { useState, useEffect } from "react";
import { Item } from "../../components";
import axios from "axios";
import "./items.css";
import { useParams } from "react-router-dom";

const Items = () => {
  const [items, setItems] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios.get("http://localhost:8000/api/items").then((response) => {
      setItems(
        response.data.filter((item) => item.category === params.category)
      );
    });
  }, []);
  console.log(items);

  return (
    <div className="items-container">
      <Item Items={items} category={params.category}/>
    </div>
  );
};

export default Items;
