import Image from "next/image";
import ThreeGoblins from "./home/threeGoblins";

export default function MirorMint() {
  return (
    <>
      <div className="absolute bg-gray-600 rounded-3xl top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-xl h-auto p-6 ring-8 ring-white text-white text-center shadow-2xl shadow-white z-30 flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center mb-6">
          <h1 className="font-bold text-3xl text-white absolute top-4 left-1/2 transform -translate-x-1/2 font-medieval z-40">
            Mint a new Goblin!
          </h1>
          <Image
            className="rounded-lg filter brightness-0 mt-10" // Adicione `mb-4` ou ajuste o valor conforme necessário
            src={require("/public/goblin5.png")}
            alt="Goblin"
            width={200}
            height={300}
            layout="responsive"
          />
        </div>
        <button className="rounded-full w-32 h-16 ring-4 ring-white bg-amber-600 hover:bg-gradient-to-r from-pink-500 to-amber-600 text-white font-bold mt-4 mb-4">
          Mint
        </button>
      </div>
    </>
  );
}
