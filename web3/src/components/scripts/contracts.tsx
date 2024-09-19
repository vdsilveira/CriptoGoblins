import { ethers } from "ethers";
import { abi } from "./abi"; // Certifique-se de que o caminho para o arquivo ABI está correto

// Função para criar uma instância do contrato
export const getContract = async () => {
  // Verifica se o MetaMask está instalado
  if (!window.ethereum) {
    console.error("MetaMask não está instalado.");
    return;
  }

  // Cria um provedor e um signer
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  // Endereço do contrato (certifique-se de definir a variável de ambiente corretamente)
  const contractAddress = "0x4B9B516165953428FA6D763d6a4BBd7814F3D8Ed";
  if (!contractAddress) {
    console.error("Endereço do contrato não está definido.");
    return;
  }

  // Cria uma instância do contrato
  const contract = new ethers.Contract(contractAddress, abi, signer);

  return contract;

  
};


