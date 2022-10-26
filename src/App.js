"use strict";

import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate,

    onSubmit: (values) => {
      alert("Login Successful");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <p></p>

      <label htmlFor="email">Email Address: </label>
      <input
        id="emailField"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <div id="emailError" style={{ color: "red" }}>
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <p></p>

      <label htmlFor="password">Password: </label>
      <input
        id="pswField"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <div id="pswError" style={{ color: "red" }}>
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </div>
      <p></p>

      <p>
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </p>
    </form>
  );
}

const validate = (values) => {
  const errors = {};

  // Check EMAIL
  if (!values.email) {
    errors.emailError = "Field required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Username should be an valid email address";
  }

  // Check PASSWORD
  if (!values.password) {
    errors.password = "Field required";
  } else if (values.password.length < 12) {
    errors.password = "Password must be at least 12 characters long";
  }

  return errors;
};

export default App;
