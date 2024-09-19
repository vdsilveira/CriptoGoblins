import Body from "@/components/body/body";
import Header from "@/components/header/header";
import Miror from "@/components/body/miror";

export default function About() {
  return (
    <>
      <Header  hideAboultUsButton={true} hideDashBoardButton={true} hideHomeButton={true} /> 
      <Body />

      <div>
        
        <Miror/> 
      </div>

    
      
    </>
  );
}

