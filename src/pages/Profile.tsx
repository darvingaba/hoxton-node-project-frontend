import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { User } from "../App"

type Props = {
  user: User | null | undefined;
};
export type NFT = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  userId: number;
};
export function Profile({user}:Props) {
    // const [userOwns,setUserOwns]= useState<User>({} as User)
    // console.log(userOwns)
    // const params = useParams()

    // useEffect(()=>{
    //     fetch(`http://localhost:3456/users/${user?.id}`)
    //       .then((res) => res.json())
    //       .then((resp) => setUserOwns(resp));
    // },[])
  return (
    <div className="profile">
      <div className="profileDetails">
        <h1>{user?.name} owned NFT's</h1>
        <p>{user?.email}</p>
        {/* <ul>
            {
                user?.nfts.map(nft=>(
                    <li>
                        <p>{nft.name}</p>
                    </li>
                ))
            }
        </ul> */}
      </div>
    </div>
  );
}