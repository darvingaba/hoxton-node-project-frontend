import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NFT } from "../pages/Home";


export function NftDetails(){

    const [nft,setNft] = useState<NFT | null>(null)
    const params = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3456/nfts/${params.id}`)
        .then(resp=>resp.json())
        .then(nft=>setNft(nft))
    },[params.id])

    return (
        <div>  
            {nft && (
                <div className="nft-details">
                    <img className="nft-details__image" src={nft.image} alt="" />
                    <h1 className="nft-details__name">{nft.name}</h1>
                    <p className="nft-details__description">{nft.description}</p>
                    <p className="nft-details__price">Price :  {nft.price}</p>
                    <button className="nft-details__button">Buy</button>
                </div>
            )}
        </div>
    )
}
