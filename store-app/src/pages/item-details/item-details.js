import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

import utils from "../../api/utils";
import "./item-detail.css";

const ItemDetails = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();
  if (!item) {
    utils.getItemById(params.itemId).then((response) => {
      if (response.status === 200) {
        setItem(response.data);
        setLoading(false);
      }
    });
  }
  return (
    <>
      {!loading && (
        <div className="container">
          <div className="link-container">
            <div className="link-to-page" onClick={() => navigate("/")}>
              Home page
            </div>
            <div>{">"}</div>
            <div
              className="link-to-page"
              onClick={() => navigate(`/${item.category}`)}
            >
              {item.category}
            </div>
            <div>{">"}</div>
            <div className="link-to-page">{item.catalog}</div>
          </div>

          <div className="details-container">
            <div className="specific-detail-container">
              <div className="name-and-price">
                <div className="detail-name-container">
                  <div>Name:</div>
                  <div className="details">{item.name}</div>
                </div>
                <div className="details-price-container">
                  <div>Price:</div>
                  <div>{item.price}</div>
                </div>
              </div>
              <div className="details-image-container">
                <img src={item.image} alt={item.name} />
              </div>
            </div>

            <div className="details-description-container">
              <div>Description:</div>
              <div className="details">{item.description}</div>
            </div>
            <div className="item-order-container">
              <button
                className="shopping-button"
                onClick={() => {
                  navigate(`/cart`);
                }}
              >
                Buy Now!
              </button>
              <button
                className="basket-button"
                onClick={() => {
                  navigate(`/`);
                }}
              >
                <BiCart />
              </button>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="loading-item-details">
          <SyncLoader size={60} margin={20} />
        </div>
      )}
    </>
  );
};

export default ItemDetails;
