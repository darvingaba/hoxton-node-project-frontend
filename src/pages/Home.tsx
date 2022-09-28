import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
type NFT = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  userId: number | null;
};

export function Home() {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [current, setCurrent] = useState(0);
  const length = nfts.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    fetch("http://localhost:3456/nfts")
      .then((resp) => resp.json())
      .then((nft) => setNfts(nft));
  }, []);

  return (
    <div className="container">
      <div className="mainNFT">
        <ul className="nftlist">
          <BsArrowLeftCircle className="leftArrow" onClick={prevSlide} />
          <BsArrowRightCircle className="rightArrow" onClick={nextSlide} />
          {nfts.map((nft, index) => (
            <li
              className={index === current ? "slide active " : "slide "}
              key={index}
            >
              {index == current && (
                <div className="nft">
                  <img src={nft.image} alt="" />
                  <h1 className="name">{nft.name}</h1>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="categories">
          <div className="categories1">
            <p className="pTag">COLLECTION</p>
            <p className="pTag">PRICE</p>
          </div>
          <div className="categories1">
            <p className="pTag">COLLECTION</p>
            <p className="pTag">PRICE</p>
          </div>
          <div className="categories1">
            <p className="pTag">COLLECTION</p>
            <p className="pTag">PRICE</p>
          </div>
        </div>
        <ul className="smallNftList">
          {nfts.map((nft) => (
            <li key={nft.id} className="smallNft">
              <p>{nft.id}</p>
              <img src={nft.image} alt="" />
              <p>{nft.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
