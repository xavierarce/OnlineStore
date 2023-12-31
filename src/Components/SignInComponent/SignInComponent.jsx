import FormInput from "../FormInput/FormInput";
import ButtonComponent, {ButtonTypesClasses} from "../ButtonComponent/ButtonComponent";

import "./SignInComponent.scss";
import { useState } from "react";


import {
  signInWithGooglePopup,
  singInEmailandPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};


const SignInComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
  await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();

    try {
      await singInEmailandPassword(email, password);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-login-credentials") {
        alert("Invalid Credentials");
      } else {
        console.log(error);
      }
    }
  };

  const onHandleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>I already have and account</h2>
      <span>Sign in With Email & Password</span>
      <form onSubmit={onHandleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={onHandleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={onHandleChange}
          name="password"
          value={password}
        />
        <div className="SignInButtons">
          <ButtonComponent type="submit">Sign In</ButtonComponent>
          <ButtonComponent
            onClick={logGoogleUser}
            buttonType={ButtonTypesClasses.google}
            type="button"
          >
            Google Sign In
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignInComponent;
