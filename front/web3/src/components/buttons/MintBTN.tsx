import Link from "next/link";

export default function MintBtn() { 
  return (
    <main className="top-0 w-full p-4 bg-opacity-50 flex justify-center items-center">
      <div className="ml-[120px]"> {/* Centralizar botão*/}
        <Link href="/mint" passHref>
          <button className="p-2 hover:text-white font-semibold bg-amber-500 text-black transition duration-300 ease-in-out rounded hover:bg-gradient-to-r from-pink-500 to-amber-600">
            Mint Your Goblin
          </button>
        </Link>
      </div>
    </main>
  );
}
