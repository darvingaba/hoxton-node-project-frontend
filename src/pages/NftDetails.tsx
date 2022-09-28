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
    console.log(nft)

    return (
    //   <div>
    //     {nft && (
    //       <div className="singleNft">
    //         <img src={nft.image} alt="" />
    //         <div className="descName">
    //           <h1 className="nftName">{nft.name}</h1>
    //           <p className="nftDesc">{nft.description}</p>
    //           <p className="nftPrize">Price {nft.price}</p>
    //           <button className="learn-more">
    //             <span className="circle" aria-hidden="true">
    //               <span className="icon arrow"></span>
    //             </span>
    //             <span className="button-text">Purchase</span>
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // );
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
