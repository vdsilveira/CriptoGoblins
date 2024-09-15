import DashBoradBtn from "@/components/buttons/DashBoardBTN";
import MirorMint from "@/components/body/MIrorMint";
import Body from "@/components/body/body";
import Header from "@/components/header/header";

export default function MintPage() {
  return (
    <>
      {/* Passa a prop hideMintButton para esconder o botão nesta página */}
      <Header hideMintButton={true} hideAboultUsButton={true} hideHomeButton={true}/>
      <Body/>
      
      <MirorMint  />
      
    </>
  );
}
