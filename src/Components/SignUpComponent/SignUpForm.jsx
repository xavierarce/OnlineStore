import { useState } from "react";

import FormInput from "../FormInput/FormInput";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./SignUpForm.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // user.displayName = displayName;

      console.log(user, "Authenticated!");

      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      console.log(userDocRef, "On Database!");
      console.log(user, "Created Eamil Password");
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email Already in Use");
      } else {
        console.log("Error during creation", error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const formFieldsInput = [
    {
      label: "Display Name",
      type: "text",
      name: "displayName",
      value: displayName,
      required: true,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      value: email,
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      value: password,
      required: true,
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      value: confirmPassword,
      required: true,
    },
  ];

  return (
    <div className="sign-up-container">
      <h2>Dont Have an account?</h2>
      <span>Sign up With Email & Password</span>
      <form onSubmit={handleSubmit}>
        {formFieldsInput.map((field, index) => {
          return (
            <FormInput
              key={index}
              label={field.label}
              type={field.type}
              required={field.required}
              onChange={handleChange}
              name={field.name}
              value={field.value}
            />
          );
        })}
        <ButtonComponent type="submit"> Sign Up</ButtonComponent>
      </form>
    </div>
  );
};

export default SignUpForm;
