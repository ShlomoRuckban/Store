import "./item.css";
import { BiCart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Item = ({ Items, category }) => {
  const navigate = useNavigate();
  const mapItems = Items.map((item) => {
    return (
      <div className="item" key={item.catalog} >
        <div className="test-container" onClick={() => {navigate(`/${category}/${item._id}`)}}>
        <img className="item-image" src={item.image} alt={item.name} />
        <h2 className="item-name">{item.name}</h2>
        <div className="item-description">{item.description}</div>
        <h4 className="item-price">{item.price}₪</h4>
        </div>
        <div className="item-order-container">
          <button className="shopping-button" onClick={() => {navigate(`/cart`)}}>Buy Now!</button>
          <button className="basket-button" onClick={() => {navigate(`/`)}}>
            <BiCart />
          </button>
        </div>
      </div>
    );
  });
  return <div className="item-container">{mapItems}</div>;
};

export default Item;
