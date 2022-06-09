import "./nav-bar.css";
import { FaSearch, FaHome } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const key = sessionStorage.getItem("UID");

  const handleAccountClick = () => {
    if (!key) {
      alert("Please Login");
      navigate("/account/login");
    } else navigate("/account");
  };

  return (
    <div className="nav-bar-container">
      <div className="main-icon-container">
        <button
          className="general-icons"
          onClick={() => {
            navigate("/");
          }}
        >
          <FaHome />
        </button>
      </div>
      <div className="search-container">
        <input className="search-bar" placeholder="Search item"></input>
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <div className="nav-container">
        <div>
          <button
            onClick={() => {
              navigate("/cart");
            }}
            className="general-icons"
          >
            <BiCart />
          </button>
        </div>

        <div className="dropdown">
          <button className="general-icons">
            <GoPerson />
          </button>
          <div className="dropdown-content">
            <div onClick={handleAccountClick}>Account</div>
            {!key && (
              <div
                onClick={() => {
                  navigate("/account/login");
                }}
              >
                Login
              </div>
            )}
            {!key && (
              <div
                onClick={() => {
                  navigate("/account/register");
                }}
              >
                Register
              </div>
            )}
            {key && (
              <div
                onClick={() => {
                  sessionStorage.clear();
                  navigate("/");
                }}
              >
                Logout
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
