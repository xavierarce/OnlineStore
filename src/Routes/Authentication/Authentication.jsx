import SignInComponent from "../../Components/SignInComponent/SignInComponent";
import SignUpForm from "../../Components/SignUpComponent/SignUpForm";
import "./Authentication.scss";

const Authentication = () => {
  return (
    <div className="SignForms">
      <SignInComponent />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
