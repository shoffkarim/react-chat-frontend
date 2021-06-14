import React from "react";
import { useFormik } from "formik";
import "./form.sass"
interface Ivalues {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
}

const validate = (values: Ivalues) => {
  let errors: any = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
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
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      login: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="form-wrapper">
      <p className="form-title">Sign Up</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-block">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className="form-block">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className="form-block">
          <label htmlFor="login">Email Address</label>
          <input id="login" type="login" {...formik.getFieldProps("login")} />
          {formik.touched.login && formik.errors.login ? (
            <div>{formik.errors.login}</div>
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
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
