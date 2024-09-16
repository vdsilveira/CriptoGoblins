// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";



contract CryptoGoblinsNFT is ERC721, ERC721URIStorage {
  
 uint256 private _tokenIdCounter;

    
    string[] public IpfsUri = [
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/QmZZ6jQTW5ERpMByz2XbfAfwc2M5fSX5aFqPa4yFhyLEcB/Goblins_Iniciais%20/1_ETH_Classic.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/QmZZ6jQTW5ERpMByz2XbfAfwc2M5fSX5aFqPa4yFhyLEcB/Goblins_Iniciais%20/2_BTC_Cash.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/QmZZ6jQTW5ERpMByz2XbfAfwc2M5fSX5aFqPa4yFhyLEcB/Goblins_Iniciais%20/3_Avax.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/QmZZ6jQTW5ERpMByz2XbfAfwc2M5fSX5aFqPa4yFhyLEcB/Goblins_Iniciais%20/4_Dot.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/QmZZ6jQTW5ERpMByz2XbfAfwc2M5fSX5aFqPa4yFhyLEcB/Goblins_Intermediarios/5_ADA.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/QmZZ6jQTW5ERpMByz2XbfAfwc2M5fSX5aFqPa4yFhyLEcB/Goblins_Intermediarios/6_sol.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/QmZZ6jQTW5ERpMByz2XbfAfwc2M5fSX5aFqPa4yFhyLEcB/Goblins_Intermediarios/7_pol.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/QmZZ6jQTW5ERpMByz2XbfAfwc2M5fSX5aFqPa4yFhyLEcB/Goblins_Avan%C3%A7ados/8_Pyth.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/QmZZ6jQTW5ERpMByz2XbfAfwc2M5fSX5aFqPa4yFhyLEcB/Goblins_Avan%C3%A7ados/9_Uni.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/QmZZ6jQTW5ERpMByz2XbfAfwc2M5fSX5aFqPa4yFhyLEcB/Goblins_Avan%C3%A7ados/10_link.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/QmZZ6jQTW5ERpMByz2XbfAfwc2M5fSX5aFqPa4yFhyLEcB/Goblins_Masters/11_ETH.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/QmZZ6jQTW5ERpMByz2XbfAfwc2M5fSX5aFqPa4yFhyLEcB/Goblins_Masters/12_BTC.json"
          ];

    constructor() ERC721("CryptoGoblinsNFT", "STAGE") {
        _tokenIdCounter = 0; // Start counting from token ID 0
    }
    // Mapeia o endereço do proprietário para uma lista de IDs de tokens que ele possui
    mapping(address => uint256[]) public ownedTokens;

    function safeMint() public {
  
            uint256 tokenId = _tokenIdCounter;
            _tokenIdCounter++;


        
            // Gera um número aleatório entre 0 e 3
            uint256 randomIndex = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, tokenId))) % 4;
            
            _safeMint(msg.sender, tokenId);
            _setTokenURI(tokenId, IpfsUri[randomIndex]);
            level[tokenId]= 0;

            if(randomIndex ==0) { 
                strength[tokenId]=1;
                agility[tokenId]=1;
                magic[tokenId]=1;
                intelligence[tokenId]=1;
           }
             if(randomIndex ==1) { 
                strength[tokenId]=2;
                agility[tokenId]=3;
                magic[tokenId]=3;
                intelligence[tokenId]=3;
           }
           if(randomIndex ==2) { 
                strength[tokenId]=1;
                agility[tokenId]=3;
                magic[tokenId]=1;
                intelligence[tokenId]=2;
           }
            if(randomIndex ==3) { 
                strength[tokenId]=2;
                agility[tokenId]=3;
                magic[tokenId]=1;
                intelligence[tokenId]=2;
           }


            // Adiciona o novo token ao mapping de tokens do proprietário
            ownedTokens[msg.sender].push(tokenId);
    }   

function getOwnedTokens( ) public view returns (uint256[] memory) {
    return ownedTokens[msg.sender];
}


   
    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    function NFTIndex(uint256 _tokenId) public view returns (uint256) {
    string memory _uri = tokenURI(_tokenId);
    for (uint256 i = 0; i < IpfsUri.length; i++) {
        if (compareStrings(_uri, IpfsUri[i])) {
            return i;
        }
    }
    return IpfsUri.length; // Retorna o último índice se a URI não for encontrada
}


    function rotatePhoto(uint256 _tokenId) public {
    require(ownerOf(_tokenId) == msg.sender, "Voce nao e o proprietario deste token");
    require(NFTIndex(_tokenId) < IpfsUri.length - 1, "Este token ja atingiu o ultimo estagio");

    uint256 newVal = NFTIndex(_tokenId) + 1;
    string memory newUri = IpfsUri[newVal];
    _setTokenURI(_tokenId, newUri);

    // Incrementa os atributos de um em um ponto
    for (uint256 i = 0; i < 1; i++) {
        increaseLevel(_tokenId);
        increaseStrength(_tokenId);
        increaseAgility(_tokenId);
        increaseMagic(_tokenId);
        increaseIntelligence(_tokenId);
        
    }
}


    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    /*function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }*/
    mapping(uint256 => uint256) public level;
    mapping(uint256 => uint256) public strength; // Mapeia o ID do token para a força do Goblin
    mapping(uint256 => uint256) public agility; // Mapeia o ID do token para a agilidade do Goblin
    mapping(uint256 => uint256) public magic;   // Mapeia o ID do token para a magia do Goblin
    mapping(uint256 => uint256) public intelligence; // Mapeia o ID do token para a inteligência do Goblin

function increaseLevel(uint256 _tokenId) public {
    require(ownerOf(_tokenId) == msg.sender, " voce nao e o proprietario deste token");
    level[_tokenId] ++;
}

function increaseStrength(uint256 _tokenId) public {
    require(ownerOf(_tokenId) == msg.sender, " voce nao e o proprietario deste token");
    strength[_tokenId] ++;
}

function increaseAgility(uint256 _tokenId) public {
    require(ownerOf(_tokenId) == msg.sender, " voce nao e o proprietario deste token");
    agility[_tokenId] ++;
}

function increaseMagic(uint256 _tokenId) public {
    require(ownerOf(_tokenId) == msg.sender, " voce nao e o proprietario deste token");
    magic[_tokenId] ++;
}

function increaseIntelligence(uint256 _tokenId) public {
    require(ownerOf(_tokenId) == msg.sender," voce nao e o proprietario deste token");
    intelligence[_tokenId] ++;
}

function getAttributes(uint256 _tokenId) public view returns (uint256 strengthValue, uint256 agilityValue, uint256 magicValue, uint256 intelligenceValue, uint256 levelValue) {
   //require(_exists(_tokenId), "Token ID nao existe");

    levelValue = level[_tokenId];
    strengthValue = strength[_tokenId];
    agilityValue = agility[_tokenId];
    magicValue = magic[_tokenId];
    intelligenceValue = intelligence[_tokenId];
}

function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721URIStorage) returns (bool) {
    return super.supportsInterface(interfaceId);
}



}