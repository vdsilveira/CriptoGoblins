import Image from "next/image";


export default function ThreeGoblins() {
  return (
   
    
    <main className="bg-black top-" >
     


      <div className="fixed top-4/4 left-4/4 bottom-0 right-0 z-[10] w-28 sm:w-36 md:w-48 lg:w-60 h-auto ">
        <Image src={require("/public/goblin5.png")} alt="Goblin Image" />
      </div>

      <div className="fixed left-0 bottom-0  z-[10] w-28 sm:w-36 md:w-48 lg:w-60 h-auto ">
        <Image src={require("/public/goblin1.png")} alt="Goblin Image" />
      </div>

      
      <div className="fixed left-1/2 bottom-0 z-[10] w-28 sm:w-36 md:w-48 lg:w-60 h-auto text-center transform -translate-x-1/2 ">
    <Image src={require("/public/222.png")} alt="Goblin Image" />
</div>



    
 </main>
    
   
  );
}