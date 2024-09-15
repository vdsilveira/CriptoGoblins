// src/pages/about.tsx
import Header from "@/components/header/header";
import Body from "@/components/body/body";
import TextBody from "@/components/body/textbody";

export default function About() {
  return (
    <>
      <Header hideAboultUsButton={true} hideMintButton={true} hideDashBoardButton={true} /> 
      <Body />
      <div>
        <TextBody /> {/* Corrigido para usar o nome correto do componente */}
      </div>
    </>
  );
}


