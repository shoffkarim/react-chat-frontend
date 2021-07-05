import React from "react";
import { useFormik } from "formik";
import "./form.sass"
import axios from "axios";
import { Redirect } from "react-router-dom";
const bcrypt = require('bcryptjs')
interface Ivalues {
  name: string;
  login: string;
  password: string;
}

const validate = (values: Ivalues) => {
  let errors: any = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.login) {
    errors.login = "Required";
  } else if (!/^[A-Za-z]/i.test(values.login)) {
    errors.login = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 15) {
    errors.password = "Must be 15 characters or less";
  }

  return errors;
};

const SignUp: React.FC = () => {
  const [login, setLogin] = React.useState(false)
  const defaultParamsUser = {
    last_seen: new Date(),
    avatar: "default-avatar.jpg",
    created_at: new Date(),
    online: false
  }
  const register = (user: any) => {
    axios.post(`/users/`, JSON.parse(user))
      .then(res => {
        console.log("login")
      })
      .catch(error => {console.error('There was an error!', error)
      });
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      login: "",
      password: "",
    },
    validate,
    onSubmit: (values: any) => {
      const hashed = bcrypt.hashSync(values.password, bcrypt.genSaltSync());
      values.password = hashed;
      const user = Object.assign(values, defaultParamsUser);
      register(JSON.stringify(user, null, 2));
      setLogin(true);
    },
  });
  return (
    <>
    <div className="form-wrapper">
      <p className="form-title">Sign Up</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-block">
          <label htmlFor="firstName">First Name</label>
          <input
            id="name"
            type="text"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error-message">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-block">
          <label htmlFor="login">Login</label>
          <input id="login" type="login" {...formik.getFieldProps("login")} />
          {formik.touched.login && formik.errors.login ? (
            <div className="error-message">{formik.errors.login}</div>
          ) : null}
        </div>
        <div className="form-block">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error-message">{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    {login && <Redirect to={"/im"}/>}
    </>
  );
};

export default SignUp;
