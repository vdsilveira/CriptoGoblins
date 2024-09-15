import { ethers } from "ethers";
import { useEffect } from "react";

export default function ConnectMetamask() {
  useEffect(() => {
    const connectMetamask = async () => {
      let signer = null;
      let provider;

      if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
      }

      // Restante do código aqui
    };

    connectMetamask();
  }, []); // Execute apenas uma vez ao montar o componente

  return (
    <div>
    {/* Conteúdo do componente aqui */}
  </div>
  );
}


      
    
            



   
  