import React from "react";
import { fakeAuth } from "./fakeAuth";
import { useNavigate } from "react-router-dom";

const ProtectedPage = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div>
      <p style={{color:'white',fontSize:21}}>You are logged in.... Welcome back {name}</p>
      <button style={{color:'white',fontSize:21,backgroundColor:'transparent'}}
        onClick={() => {
          fakeAuth.logout(() =>
            navigate("/login", { state: { from: { pathname: "/protected" } } })
          );
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default ProtectedPage;
