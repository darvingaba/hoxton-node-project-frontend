import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NFT } from "../pages/Home";
import { User } from "../App";

type Props={
    user:User | null | undefined
}

export function NftDetails({user}:Props){

    const [nft,setNft] = useState<NFT | null>(null)
    const params = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3456/nfts/${params.id}`)
        .then(resp=>resp.json())
        .then(nft=>setNft(nft))
    },[])
    console.log(nft)

    return (
      <div>
        {nft && (
          <div className="nft-details">
            <img className="nft-details__image" src={nft.image} alt="" />
            <h1 className="nft-details__name">{nft.name}</h1>
            <p className="nft-details__description">{nft.description}</p>
            <p className="nft-details__price">Price : {nft.price}</p>
            <button
              onClick={() => {
                fetch(`http://localhost:3456/nfts/${params.id}`, {
                  method: "PATCH",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({
                    userId: user?.id,
                  }),
                })
                  .then((res) => res.json())
                  .then(() => {
                    fetch(`http://localhost:3456/nfts/${params.id}`)
                      .then((resp) => resp.json())
                      .then((nft) => setNft(nft));
                  });
              }}
              className="nft-details__button"
            >
              Buy
            </button>
            {nft.userId == user?.id ? (
              <p className="purchaseNotification">Purchase successful</p>
            ) : (
              <p>Hello</p>
            )}
          </div>
        )}
      </div>
    );
}
