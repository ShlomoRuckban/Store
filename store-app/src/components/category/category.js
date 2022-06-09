import { useNavigate } from "react-router-dom";
import "./category.css";

const Category = ({ Name, Image, id }) => {
  const navigate = useNavigate();
  return (
    <div className="category-container" onClick={() => {navigate(`/${Name}`)}}>
      <img className="images" src={Image} alt="Logo" />
      <p>{Name}</p>
    </div>
  );
};

export default Category;
