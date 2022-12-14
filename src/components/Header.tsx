import { Link, useNavigate } from "react-router-dom";
import { User } from "../App";

type Props = {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  user: User | null;
};

export function Header({setUser,user}:Props){
  const navigate = useNavigate()

    return (
      <div className="nav">
        <h1 className="logo">NFT World</h1>
        <ul className="headerUl">
          
          <Link to={"/home"}>
            <li>Home</li>
          </Link>

          <Link to={"/about"}>
            <li>About</li>
          </Link>

          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
          <Link to={"/profile"}>
            {user ? <li>{user.name}'s Profile</li> : <li>Profile</li>}
          </Link>
          {user?<li
            onClick={(e) => {
              // e.preventDefault();
              // localStorage.removeItem("token");
              setUser(null);
              navigate("/signin");
            }}
          >
            Logout
          </li>:<li>Login</li>}
        </ul>
      </div>
    );
}