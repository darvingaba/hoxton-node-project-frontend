import { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../App";

type Props = {
  user : User | null | undefined;
  setUser:React.Dispatch<React.SetStateAction<User | null | undefined>>;
};


export function SignUp({user,setUser}:Props) {
    // const [user,setUser] = useState<null | User>()
    const [errors, setErrors] = useState("");

  return (
    <div className="signup">
      <div className="signupForm">
        {user ? <h2>Please sign in!</h2> : <h2>Create an account!</h2>}
        <form
          className="formSignup"
          onSubmit={(e) => {
            e.preventDefault();
            fetch("http://localhost:3456/sign-up", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                email: e.target.email.value,
                name: e.target.userName.value,
                password: e.target.password.value,
              }),
            })
              .then((res) => res.json())
              .then((userData) => {
                if (userData.error) {
                  setErrors(userData.error);
                } else {
                  setUser(userData.user)
                  localStorage.token= userData.token
                }
              })
          }}
        >
          <input type="text" name="userName" placeholder="Name" required/>
          <input type="email" name="email" placeholder="Email" required/>
          <input type="password" name="password" placeholder="Password" required/>
          <button>Sign up</button>
          {errors ? <p className="error">{errors}</p> : <p></p>}
          <p>Already have an account? </p>
          <Link to={"/signin"}>Sign in</Link>
        </form>
      </div>
    </div>
  );
}
