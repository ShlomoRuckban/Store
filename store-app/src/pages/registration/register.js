import "./register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import utils from "../../api/utils";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    utils.registerUser(data).then((response) => {
      if (response.status === 200) navigate("/account/login");
    });
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className="register-container">
      <form
        className="register-form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <h2 className="title">Register</h2>
        <div className="register">
          <label>Name</label>
          <input
            placeholder="Enter Name"
            {...register("name", { required: true })}
          ></input>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
