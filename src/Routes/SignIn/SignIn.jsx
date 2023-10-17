import { signInWithGooglePopup ,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'; //1


const SignIn = () => {
  const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      console.log(user);
      // const userDocRef = await createUserDocumentFromAuth(user)

  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign In With google </button>
    </div>
  );
};

export default SignIn;
