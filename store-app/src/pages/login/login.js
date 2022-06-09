import "./login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import utils from "../../api/utils";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    utils.login(data).then((response) => {
      if (response.status === 200) {
        //Safe For Use Key
        console.log(response.data)
        
        sessionStorage.setItem("SFUK", response.data.token);
        sessionStorage.setItem("UID", response.data.id);
        navigate("/");
      }
    });
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit, onError)}>
        <h2 className="title">Login</h2>
        <div className="login">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            {...register("email", { required: true })}
          ></input>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", { required: true })}
          ></input>
        </div>
        <button type="submit" value="Submit" className="submit-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
