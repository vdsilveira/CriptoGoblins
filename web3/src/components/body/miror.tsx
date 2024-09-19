"use client";
import { useEffect, useRef, useState } from "react";
import { getContract } from "../scripts/contracts";

export default function Miror() {
  const [tokens, setTokens] = useState<BigInt[]>([]);
  const [tokenData, setTokenData] = useState<{ uri: string; attributes: any; image: string }[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const contract = await getContract();
        if (!contract) {
          console.error("Não foi possível obter o contrato.");
          return;
        }

        const GetOwnTokens = await contract.getOwnedTokens();
        const tokenArray = Array.from(GetOwnTokens);
        setTokens(tokenArray);

        // Chama tokenURI e getAttributes para cada token
        const tokenDetails = await Promise.all(tokenArray.map(async (token) => {
          const uri = await contract.tokenURI(token);
          const attributes = await contract.getAttributes(token);

          // Faz uma requisição para obter os dados do IPFS
          const response = await fetch(uri);
          const data = await response.json();

          return { uri, attributes, image: data.image }; // Armazena a imagem
        }));

        setTokenData(tokenDetails);
      } catch (error) {
        console.error("Erro ao carregar tokens", error);
      }
    };

    fetchTokens();
  }, []);

  const MyIndex = tokens.length;
  const totalPages = Math.ceil(MyIndex / 4);

  const buttons = tokenData.slice(currentPage * 4, (currentPage + 1) * 4).map((data, index) => (
    <button
      key={index}
      className="rounded-full w-20 h-20 ring-4 ring-white mt-4 mb-4"
    >
      <img
        className="rounded-full"
        src={data.image} // Usando a imagem do JSON
        alt={`Button ${index}`}
      />
    </button>
  ));

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -containerRef.current.offsetWidth / 2 : containerRef.current.offsetWidth / 2;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const changePage = (page: number) => {
    // Garante que a página não exceda o número total de páginas
    setCurrentPage(Math.min(page, totalPages - 1));
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: (containerRef.current.scrollWidth / totalPages) * page,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <h1 className="font-bold text-5xl text-white absolute top-28 left-1/2 transform -translate-x-1/2 font-medieval">
        Your Goblins!
      </h1>
      <span className="absolute bg-slate-700 rounded-3xl top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-3/5 ring-8 ring-white text-white text-center shadow-2xl shadow-white z-50">
        <span className="flex">
          <div className="mt-4 mb-4 ml-4">
            <img
              className="h-auto w-72 rounded-lg brightness-0"
              src="/goblin5.png"
              alt="Goblin"
            />
          </div>
          <div className="mt-5 mb-4 pl-6 px-20 pt-10 text-white text-left items-start">
            Name: <br />
            Id: <br />
            Strength: <br />
            Agility: <br />
            Magic: <br />
            Intelligence: <br />
          </div>
        </span>
        <div
          ref={containerRef}
          className="space-x-8 mt-2 h-auto text-white bg-opacity-55 bg-gradient-to-r from-amber-600 to-purple-700 rounded-bl-3xl rounded-br-3xl overflow-x-auto whitespace-nowrap flex justify-center"
        >
          {buttons}
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={() => changePage(currentPage === 0 ? totalPages - 1 : currentPage - 1)}
            className="w-16 h-16 rounded-full text-white text-6xl font-bold flex items-center justify-center"
            disabled={currentPage === 0}
          >
            ◀️
          </button>
          <button
            className="w-40 h-16 bg-[rgb(255,152,0)] hover:bg-gradient-to-r from-pink-500 to-amber-600 rounded-full text-white font-bold"
            onClick={() => {/* implementar Level UP */}}
          >
            Level UP
          </button>

          <button
            onClick={() => changePage(currentPage === totalPages - 1 ? 0 : currentPage + 1)}
            className="w-16 h-16 rounded-full text-white text-6xl font-bold flex items-center justify-center"
          >
            ▶️
          </button>
        </div>
      </span>
    </>
  );
}
