import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DisconnectBtn() {
  const [isConnected, setIsConnected] = useState(true);
  const router = useRouter();

  const handleDisconnectWallet = async () => {
    try {
      // Verifica se a MetaMask está instalada
      if (window.ethereum && window.ethereum.isMetaMask) {
        // Desconecta manualmente a conta do MetaMask
        await window.ethereum.request({
          method: "eth_requestAccounts",
          params: [{ eth_accounts: {} }]
        });
      }

      setIsConnected(false);
      router.push("/");
    } catch (error) {
      console.error("Error disconnecting from MetaMask:", error);
    }
  };

  return (
    <main className="top-0 w-full p-4 bg-opacity-50 ">
      <button
        className="p-2 text-white font-semibold border hover:border-red-600 bg-red-600 transition duration-300 ease-in-out rounded"
        onClick={handleDisconnectWallet}
        disabled={!isConnected} // Desabilita o botão se não estiver conectado
      >
        Disconnect
      </button>
    </main>
  );
}
