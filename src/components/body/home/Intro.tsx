import Image from "next/image";
import ThreeGoblins from "./threeGoblins";


export default function Intro() {
  return (
   
            <div className="fixed top-28 left-1/2 w-full max-w-[750px] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] transform -translate-x-1/2 flex flex-col gap-5  ">
            <h1 className="text-5xl text-white font-semibold bg-opacity-50">
                Enter into the magic world of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                    {" "}
                    CryptoGoblins
                </span>
            </h1>
            <p className="text-gray-200">
                where art meets blockchain, and imagination knows no bounds!
            </p>
        </div>


   
  );
}


      
    
            



   
  