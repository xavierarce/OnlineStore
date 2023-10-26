import "./ButtonComponent.scss";
/* 
default

inverted

google-sign-in
*/

const ButtonTypesClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};

const ButtonComponent = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${ButtonTypesClasses[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
