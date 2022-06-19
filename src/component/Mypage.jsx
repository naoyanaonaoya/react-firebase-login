import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";

const Mypage = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(user);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login/");
  };

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/login/`} />
          ) : (
            <>
              <h1>マイページ</h1>
              <p>{user && user.email}</p>
              <button onClick={logout}>ログアウト</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Mypage;
