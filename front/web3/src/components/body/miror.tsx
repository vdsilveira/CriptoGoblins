import Image from "next/image";
import ThreeGoblins from "./home/threeGoblins";

export default function Miror() {
  return (
    <>
     <h1 className="font-bold text-5xl text-white absolute top-28 left-1/2 transform -translate-x-1/2 font-medieval">
          Your Goblins!
      </h1>
      <span className="absolute  bg-black rounded-3xl top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-3/5 ring-8 ring-white text-white text-center shadow-2xl shadow-white z-50" >
        <span className="flex">
          <div className="mt-4 mb-0 ml-4  ">
            <img
              className="h-auto w-72 rounded-lg"
              src="https://i.seadn.io/s/raw/files/a1112e690e5ef1f5292d3ba3227741c6.png?auto=format&dpr=1&w=384"
            />
          </div>
          <div className="mt-5 mb-4 pl-6 px-20 pt-10 text-white text-left items-start ">
            Name: <br />
            Id: <br />
            Strength: <br />
            Agility: <br />
            Magic: <br />
            Intelligence: <br />
          </div>
        </span>
        <div className=" space-x-4 h-28 mt-4 text-white bg-amber-600 rounded-bl-3xl rounded-br-3xl ">
        <button className=" rounded-full w-20 h-20 ring-4 ring-white mt-4 ">
            <img className=" rounded-full" src="https://i.seadn.io/s/raw/files/acc1b50c27fe83fbb12631b866833bb5.png?auto=format&dpr=1&w=384" alt="" />

          </button> 
          <button className=" rounded-full w-20 h-20 ring-4 ring-white mt-4 ">
            <img className=" rounded-full" src="https://i.seadn.io/s/raw/files/acc1b50c27fe83fbb12631b866833bb5.png?auto=format&dpr=1&w=384" alt="" />

          </button>
          <button className=" rounded-full w-20 h-20 ring-4 ring-white mt-4 ">
            <img className=" rounded-full" src="https://i.seadn.io/s/raw/files/acc1b50c27fe83fbb12631b866833bb5.png?auto=format&dpr=1&w=384" alt="" />

          </button>
          <button className=" rounded-full w-20 h-20 ring-4 ring-white mt-4 ">
            <img className=" rounded-full" src="https://i.seadn.io/s/raw/files/acc1b50c27fe83fbb12631b866833bb5.png?auto=format&dpr=1&w=384" alt="" />

          </button>
          
        </div>
      </span>

     
    </>
  );
}
