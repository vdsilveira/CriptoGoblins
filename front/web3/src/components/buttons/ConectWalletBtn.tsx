import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa useRouter do Next.js
import { ethers } from "ethers";

export default function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const router = useRouter(); // Instancia o hook useRouter

  const handleConnectWallet = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress(); 
      setIsConnected(true);
      router.push("/dashboard"); // Redireciona para /dashboard após a conexão
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  return (
    <>
      {isConnected ? (
        <button 
          className=" fixed bg-gradient-to-r from-violet-900 to-pink-700 hover:from-pink-700 hover:to-violet-900 hover:ring-4 ring-amber-400 rounded  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold font-sans text-white w-48 sm:w-36 md:w-48 lg:w-60 h-28 sm:h-auto lg:h-24 p-2" 
        >
          Wallet Connected
        </button>
      ) : (
        <button 
          className=" fixed bg-gradient-to-r from-violet-900 to-pink-700 hover:from-pink-700 hover:to-violet-900 hover:ring-4 ring-amber-400 rounded  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold font-sans text-white w-48 sm:w-36 md:w-48 lg:w-60 h-28 sm:h-auto lg:h-24 p-2" 
          onClick={handleConnectWallet}
        >
          Connect your wallet
        </button>
      )}
    </>
  );
}
