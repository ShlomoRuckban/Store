import { Footer, NavBar } from "./components";
import "./App.css";
import FetchNewData from "./hooks/fetch-data";
import { Routes, Route } from "react-router-dom";
import {
  Main,
  CreateNewItem,
  Items,
  ItemDetails,
  Login,
  Register,
  Account,
  Cart,
} from "./pages";

function App() {
  FetchNewData();

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/newitem" element={<CreateNewItem />} />
        <Route path="/account" element={<Account />} />
        <Route path="/:category" element={<Items />} />
        <Route path="/:category/:itemId" element={<ItemDetails />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
