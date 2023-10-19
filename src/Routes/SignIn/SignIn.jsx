//! Login With Redirect
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../Components/SignUp/SignUpForm";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {

  // ! Login With Redirect
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await getRedirectResult(auth);
  //       console.log(response);
  //       if(response){
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     } catch (error) {}
  //   })(); // Call the async function immediately
  // }, []);
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user + 'Log ggog');
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign In With google PopUp</button>
      <SignUpForm/>
      {/* Login with Redirect */}
      {/* <button onClick={signInWithGoogleRedirect}> Sign In With google Redired </button> */}
    </div>
  );
};

export default SignIn;
