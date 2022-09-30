import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { User } from "../App"

type Props = {
  user: User | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>
};
export type NFT = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  userId: number;
};
export function Profile({user,setUser}:Props) {

    const params = useParams()

  return (
    <div className="profile">
      <div className="profileDetails">
        <div className="picAndEmail">
          <img
            className="profilePic"
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
          <h1>{user?.name}'s Profile</h1>
          <p>{user?.email}</p>
        </div>
        <form
          className="updateForm"
          onSubmit={(e) => {
            fetch(`http://localhost:3456/users/${params.id}`, {
              method: "PATCH",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value,
              }),
            })
              .then((res) => res.json())
              .then((userData) => setUser(userData));
          }}
        >
          <h2>Update profile details</h2>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}