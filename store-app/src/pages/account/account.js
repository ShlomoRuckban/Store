import React from "react";
import "./account.css";

const Account = () => {
  const key = sessionStorage.getItem("UID");
  console.log(key);

  return <div>Account page</div>;
};

export default Account;
