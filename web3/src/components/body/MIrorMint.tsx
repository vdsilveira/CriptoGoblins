"use client"; // Adicione esta linha no início do arquivo

import { useState } from "react";
import Image from "next/image";
import { getContract } from "../scripts/contracts"; // Certifique-se de que o caminho está correto

export default function MirorMint() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleMint = async () => {
    setLoading(true);
    try {
      const contract = await getContract();
      if (!contract) {
        console.error("Não foi possível obter o contrato.");
        return;
      }

      const mintTx = await contract.safeMint();
      await mintTx.wait(); // Espera a transação ser minerada
      console.log("Mint bem-sucedido!");

      // Obtém o tokenId do token recém-criado
      const tokenId = await contract.getOwnedTokens();
      const tokenUri = await contract.tokenURI(tokenId[tokenId.length - 1]);

      // Fetches the token URI to get the image URL
      const response = await fetch(tokenUri);
      const data = await response.json();

      // Adiciona um parâmetro de consulta único para evitar cache
      setImageUrl(`${data.image}?t=${new Date().getTime()}`);
    } catch (error) {
      console.error("Erro ao fazer mint:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="absolute bg-gray-600 rounded-3xl top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-xl h-auto p-6 ring-8 ring-white text-white text-center shadow-2xl shadow-white z-30 flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center mb-6">
          <h1 className="font-bold text-3xl text-white absolute top-4 left-1/2 transform -translate-x-1/2 font-medieval z-40">
            Mint a new Goblin!
          </h1>
          {/* Usa a URL da imagem armazenada, se disponível */}
          {imageUrl ? (
            <Image
              className="rounded-lg filter mt-10"
              src={imageUrl}
              alt="Goblin"
              width={200}
              height={300}
              layout="responsive"
            />
          ) : (
            <Image
              className="rounded-lg filter brightness-0 mt-10"
              src="/goblin5.png" // Usa o caminho relativo correto
              alt="Goblin"
              width={200}
              height={300}
              layout="responsive"
            />
          )}
        </div>
        <button
          onClick={handleMint}
          className={`rounded-full w-32 h-16 ring-4 ring-white bg-amber-600 text-white font-bold mt-4 mb-4 transition duration-300 ease-in-out ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "hover:bg-gradient-to-r from-pink-500 to-amber-600"
          }`}
          disabled={loading}
        >
          {loading ? "Minting..." : "Mint"}
        </button>
      </div>
    </>
  );
}
