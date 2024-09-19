import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || ""; // Adicionando um valor padrão vazio

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`, // Certifique-se de que o INFURA_PROJECT_ID está presente no .env
      accounts: [PRIVATE_KEY], // A chave privada deve estar dentro de um array
    },
    localHost: {
      url: process.env.LocalHost_URL || "", // Use valor padrão vazio, se não definido
      accounts: [PRIVATE_KEY], // Deve ser um array de strings
    },
  },
};

export default config;

