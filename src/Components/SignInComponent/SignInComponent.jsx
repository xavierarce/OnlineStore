import FormInput from "../FormInput/FormInput";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

import "./SignInComponent.scss";
import { useState , useContext} from "react";

import { UserContext } from "../../contexts/User.context";


import {
  signInWithGooglePopup,
  singInEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};


const SignInComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const {setCurrectUser} = useContext(UserContext);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user + "Log ggog");
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await singInEmailandPassword(email, password)
      setCurrectUser(user)
      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/invalid-login-credentials'){
        alert('Invalid Credentials')
      }else{
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
            buttonType="google"
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
