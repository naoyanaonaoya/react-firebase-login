import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
// import Todo from "./Todo";

interface USER {
  email: string;
}

const Mypage = () => {
  const [user, setUser] = useState<USER>({ email: "" });
  const [loading, setLoading] = useState<boolean>(true);

  // console.log(user);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser: any) => {
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
              <p>todo list</p>
              {/* <Todo /> */}
              <button onClick={logout}>ログアウト</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Mypage;
