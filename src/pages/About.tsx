
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import mail from '../assets/mail.png';
import discord from '../assets/discord.png';

export function About() {
    return (
        <div className="about">

            <div className='about-section__first'>
                <h1>Stay in the loop</h1>
                <h2>
                    Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFT World.
                </h2>
            </div>

            <div className='about-section__second'>
                <h1>
                    Join the community
                </h1>
                <div className='about-buttons'>
                    <button><img src={twitter} alt="" /></button>
                    <button><img src={mail} alt="" /></button>
                    <button><img src={facebook} alt="" /></button>
                    <button><img src={discord} alt="" /></button>
                </div>

            </div>

            <div className='about-section__third'>
                <h1>NFT World</h1>
                <h2>
                    The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                </h2>
            </div>
        </div>
    )
}

