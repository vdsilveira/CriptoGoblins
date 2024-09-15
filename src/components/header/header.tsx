"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MintBtn from "../buttons/MintBTN";
import DisconnectBtn from "../buttons/DisconnectBTN";
import DashBoardBtn from "../buttons/DashBoardBTN";
import HomeBtn from "../buttons/homebtn";


export default function Header({
  hideMintButton = false,
  hideDisconectButton = false,
  hideAboultUsButton = false,
  hideDashBoardButton = false,
  hideHomeButton = false,
}: { 
  hideMintButton?: boolean; 
  hideDisconectButton?: boolean;
  hideAboultUsButton?: boolean;
  hideDashBoardButton?: boolean;
  hideHomeButton?: boolean;
}) {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Verifique a conexão com MetaMask ao carregar o componente
    if (typeof window.ethereum !== "undefined") {
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setIsConnected(true);
          }
        })
        .catch((err: any) => console.error(err));

      // Adiciona um listener para mudanças na conta do MetaMask
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      });
    }
  }, []);

  return (
    <header className="bg-black fixed top-0 left-0 w-full p-4 bg-opacity-50 z-[20]">
      <nav className="max-w-full mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Image src="/githubIcon.png" alt="GitHub Icon" width={32} height={32} className="w-8 h-8 mr-2" />
          <Link legacyBehavior href="https://github.com/vdsilveira">
            <a className="text-white text-2xl font-bold">vdsilveira</a>
          </Link>
        </div>

        <div className="flex space-x-4">
          {isConnected && !hideMintButton && (
            <MintBtn />
          )}
          {isConnected && !hideDashBoardButton && (
            <DashBoardBtn />
          )}
           {isConnected && !hideHomeButton && (
            <HomeBtn />
          )}
        </div>

        <div className="flex items-center justify-end space-x-4">
          {!hideAboultUsButton && (
            <Link href="/about" passHref>
              <button className="p-2 w-36 text-white font-semibold border border-amber-500 hover:bg-amber-500 hover:text-black transition duration-300 ease-in-out rounded">
                About us
              </button>
            </Link>
          )}
          <Link href="https://faucets.chain.link/" passHref>
            <button className="p-2 w-36 text-white font-semibold border border-amber-500 hover:bg-amber-500 hover:text-black transition duration-300 ease-in-out rounded">
              Get Faucet
            </button>
          </Link>
          {isConnected && !hideDisconectButton && <DisconnectBtn />}
        </div>
      </nav>
    </header>
  );
}
