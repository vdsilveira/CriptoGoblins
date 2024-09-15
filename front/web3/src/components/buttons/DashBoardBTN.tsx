import Link from "next/link";

export default function DashBoardBtn() { 
  return (
    <main className="top-0 w-full p-4 bg-opacity-50 flex justify-center items-center">
      <div className="ml-[150px]"> {/* Centralizar botão*/}
        <Link href="/dashboard" passHref>
          <button className="p-2 hover:text-white font-semibold bg-amber-500 text-black transition duration-300 ease-in-out rounded hover:bg-gradient-to-r from-pink-500 to-amber-600">
            DashBoard
          </button>
        </Link>
      </div>
    </main>
  );
}