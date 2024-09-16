import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const CryptoGoblinsNFT_Module = buildModule("cryptoGoblinsNFT_Module", (m) => {
  

  const cryptoGoblinsNFT = m.contract("CryptoGoblinsNFT" );

  return { cryptoGoblinsNFT };
});

export default CryptoGoblinsNFT_Module;


    
      //npx hardhat ignition deploy ./ignition/modules/CryptoGoblinsNFT.ts --network sepolia
      // 0xA4E0510fc10666021F078a912A67B3c488eeFFD1