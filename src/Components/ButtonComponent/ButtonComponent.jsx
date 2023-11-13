import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./Button.styles.jsx";
/* 
default

inverted

google-sign-in
*/

export const ButtonTypesClasses = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = ButtonTypesClasses.base) =>
  ({
    [ButtonTypesClasses.base]: BaseButton,
    [ButtonTypesClasses.google]: GoogleSignInButton,
    [ButtonTypesClasses.inverted]: InvertedButton,
  }[buttonType]);

const ButtonComponent = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default ButtonComponent;
