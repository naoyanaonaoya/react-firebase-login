import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  const [user] = useAuthState(auth);
  return (
    <>
      <div>
        {user ? (
          <>
            <UserInfo />
            <SignOutButton />
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </>
  );
}

export default Home;

// サインイン
function SignInButton() {
  const signInWithGoogle = () => {
    // firebaseを使ってグーグルでサインインする
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <button onClick={signInWithGoogle}>グーグルでサインインする</button>
    </>
  );
}

// サインアウト
function SignOutButton() {
  return (
    <>
      <button onClick={() => auth.signOut()}>
        <p>サインアウト</p>
      </button>
    </>
  );
}

function UserInfo() {
  return (
    <>
      <div className="userInfo">
        <img src={auth.currentUser.photoURL} alt="" />
        <p>{auth.currentUser.displayName}</p>
      </div>
    </>
  );
}
