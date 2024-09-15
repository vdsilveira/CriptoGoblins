"use client";
import Image from "next/image";
import Header from "@/components/header/header";
import Body from "@/components/body/body";
import ThreeGoblins from "@/components/body/home/threeGoblins";
import Intro from "@/components/body/home/Intro";
import ConectWallet from "@/components/buttons/ConectWalletBtn";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="bg-black">
        {/* Passa as propriedades hideMintButton e hideDisconectButton */}
        <Header hideMintButton={true} hideDisconectButton={true} hideDashBoardButton={true} hideHomeButton={true} />
        <Body />
        <Intro />
        <ThreeGoblins />
        <ConectWallet />
      </div>
    </main>
  );
}
