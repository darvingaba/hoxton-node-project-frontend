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
                <div>
                    <img src={nft.image} alt="" />
                    <h1>{nft.name}</h1>
                    <p>{nft.description}</p>
                    <p>{nft.price}</p>
                </div>
            )}
        </div>
    )
}
