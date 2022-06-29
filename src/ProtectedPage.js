import React from "react";
import { fakeAuth } from "./fakeAuth";
import { useNavigate } from "react-router-dom";

const ProtectedPage = ({ x }) => {
  const navigate = useNavigate();
  return (
    <div>
      <p style={{color:'white',fontSize:21}}>You are logged in. Welcome to protected page! Value of x is {x}</p>
      <button style={{color:'black',fontSize:21,borderRadius:15,height:35}}
        onClick={() => {
          fakeAuth.logout(() =>
            navigate("/login", { state: { from: { pathname: "/protected" } } })
          );
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default ProtectedPage;
