import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const CryptoGoblinsNFT_Module = buildModule("cryptoGoblinsNFT_Module", (m) => {
  

  const cryptoGoblinsNFT = m.contract("CryptoGoblinsNFT" );

  return { cryptoGoblinsNFT };
});

export default CryptoGoblinsNFT_Module;
