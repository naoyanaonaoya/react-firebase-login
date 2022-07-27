import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate, Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error: typeof error.message) {
      // alert("メールアドレスまたはパスワードが間違っています");
      alert(error.message);
    }
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
    });
    return () => unSub();
  });

  return (
    <>
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <h1>ログインページ</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input
                name="email"
                type="email"
                value={loginEmail}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLoginEmail(e.target.value)
                }
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                name="password"
                type="password"
                value={loginPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLoginPassword(e.target.value)
                }
              />
            </div>
            <button>ログイン</button>
            <p>
              新規登録は<Link to={`/register/`}>こちら</Link>
            </p>
          </form>
        </>
      )}
    </>
  );
};

export default Login;
