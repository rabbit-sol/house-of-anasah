

import { Question } from "./faq";
const Footer = () => {
    return (
        <>


            <footer className="border-t-2  border-x-2 rounded-3xl  md:border-t-4 md:border-x-4 new_footer_area bg_color_footer m-4">
                <div className="  flex flex-col items-center mt-4 py-2 w-full">

                    <h3 className="font-coiny text-2xl text-brand-pink uppercase mt-4">

                        FAQ&#39;s

                    </h3>

                    <div className="App">

                        <div className="col-container">

                            <div className="col-side left">

                                <Question

                                    color="#3ABFEF"

                                    question="My Wallet is Showing NOT WHITELISTED?"

                                    answer="You need to make sure you are connected with the same wallet which you provide to us. If you still facing the same issue then you need to check if your whitelisted for Phase 1 or 2"

                                ></Question>

                                <Question

                                    color="#6270F0"

                                    question="My wallet is not showing on the list?"

                                    answer="You can select WalletConnect and follow the instructions to connect with your wallet"

                                ></Question>

                                <Question

                                    color="#3ABFEF"

                                    question="How much will be the Gas?"

                                    answer="We are using ERC721A Contract. The Gas will be very cheap and if you mint 1 or 2 NFTs in same Transaction it will almost cost you same Gas as Minting 1 NFT."

                                ></Question>
        
                                <Question

                                    color="#3ABFEF"

                                    question="I have Just Minted where is my NFT?"

                                    answer="You can go to opensea.io then connect your wallet with same address which you have used to mint the NFT and click on profile, here you can see your NFT"

                                ></Question>

        
                          
        
        
                                 <Question

                                    color="#3ABFEF"

                                    question="Where can I find House Of Anasah digital collection?"

                                    answer="Our Official Collection will appear under this Account on opensea https://opensea.io/house_of_anasah"

                                ></Question>
        
        
        
        
        
        
                            </div>



                        </div>

                    </div>

                </div>

                    <div className="footer_bottom item-center text-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400 f_size_18">&#169; GHOSTLERS Inc. 2022 All rights reserved.</p>
                                </div>
                              
                            </div>
                        </div>
                    </div>
        </footer>
        </>
    );
};

export default Footer;
