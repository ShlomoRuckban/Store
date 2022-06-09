import { Category } from "../../components";
import "./main.css";

function Main() {
  const categories = [
    {
      name: "Computers",
      img: "https://ksp.co.il/shop/cats/397.png?ver=220529",
      id: 1,
    },
    {
      name: "Television",
      img: "https://ksp.co.il/m_action_libs/img/topCategory/17.png?v=2029",
      id: 2,
    },
    {
      name: "Phones",
      img: "https://ksp.co.il/shop/cats/573.png?ver=220529",
      id: 3,
    },
    {
      name: "Home",
      img: "https://ksp.co.il/m_action_libs/img/topCategory/3.png?v=2029",
      id: 4,
    },
    {
      name: "Cosmetics",
      img: "https://ksp.co.il/m_action_libs/img/topCategory/32.png?v=2029",
      id: 5,
    },
    {
      name: "Camping",
      img: "https://ksp.co.il/m_action_libs/img/topCategory/8.png?v=2029",
      id: 6,
    },
    {
      name: "Watches",
      img: "https://ksp.co.il/m_action_libs/img/topCategory/6.png?v=2029",
      id: 7,
    },
    {
      name: "Toys",
      img: "https://ksp.co.il/m_action_libs/img/topCategory/2.png?v=2029",
      id: 8,
    },
    {
      name: "Office",
      img: "https://ksp.co.il/m_action_libs/img/topCategory/22.png?v=2029",
      id: 9,
    },
  ];

  const categoriesMap = categories.map((c) => {
    return <Category Name={c.name} Image={c.img} key={c.id} id={c.id} />;
  });
  return (
    <div className="main-container">
      <div className="categories-container">{categoriesMap}</div>
    </div>
  );
}

export default Main;
