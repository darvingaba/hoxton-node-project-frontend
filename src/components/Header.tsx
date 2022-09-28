import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../App";

type Props = {
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
  user: User | null | undefined;
};

export function Header({setUser,user}:Props){
  const navigate = useNavigate()

    return (
      <div className="nav">
        <h1 className="logo">NFT World</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          {user?<li>{user.name}'s Profile</li>:<li>Profile</li>}
          <li
            onClick={(e) => {
              // e.preventDefault();
              // localStorage.removeItem("token");
              setUser(null);
              navigate("/signin");
            }}
          >
            Logout
          </li>
        </ul>
      </div>
    );
}