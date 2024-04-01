// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";



contract CryptoGoblinsNFT is ERC721, ERC721URIStorage {
  
 uint256 private _tokenIdCounter;

    
    string[] public IpfsUri = [
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/Qmb8Kd29NEAjecQkQHTMJ2GfxSfk5jBRgcrEdcFtuJbA4Z/Goblins_Iniciais/1_Eth_Classic.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/Qmb8Kd29NEAjecQkQHTMJ2GfxSfk5jBRgcrEdcFtuJbA4Z/Goblins_Iniciais/2_BTC_cash.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/Qmb8Kd29NEAjecQkQHTMJ2GfxSfk5jBRgcrEdcFtuJbA4Z/Goblins_Iniciais/3_AVAX.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/Qmb8Kd29NEAjecQkQHTMJ2GfxSfk5jBRgcrEdcFtuJbA4Z/Goblins_Iniciais/4_DOT.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/Qmb8Kd29NEAjecQkQHTMJ2GfxSfk5jBRgcrEdcFtuJbA4Z/Goblins_intermediarios/5_ADA.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/Qmb8Kd29NEAjecQkQHTMJ2GfxSfk5jBRgcrEdcFtuJbA4Z/Goblins_intermediarios/6_SOL.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/Qmb8Kd29NEAjecQkQHTMJ2GfxSfk5jBRgcrEdcFtuJbA4Z/Goblins_intermediarios/7_POL.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/Qmb8Kd29NEAjecQkQHTMJ2GfxSfk5jBRgcrEdcFtuJbA4Z/Goblins_Avan%C3%A7ados/8_PYTH.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/Qmb8Kd29NEAjecQkQHTMJ2GfxSfk5jBRgcrEdcFtuJbA4Z/Goblins_Avan%C3%A7ados/9_UNI.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/Qmb8Kd29NEAjecQkQHTMJ2GfxSfk5jBRgcrEdcFtuJbA4Z/Goblins_Avan%C3%A7ados/10_LINK.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/Qmb8Kd29NEAjecQkQHTMJ2GfxSfk5jBRgcrEdcFtuJbA4Z/Goblins_Masters/11_ETH.json",
        "https://ivory-total-gecko-975.mypinata.cloud/ipfs/Qmb8Kd29NEAjecQkQHTMJ2GfxSfk5jBRgcrEdcFtuJbA4Z/Goblins_Masters/12_BTC.json"
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

    // Adiciona o novo token ao mapping de tokens do proprietário
    ownedTokens[msg.sender].push(tokenId);
    }   

function getOwnedTokens() public view returns (uint256[] memory) {
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
    require(NFTIndex(_tokenId) < 11, "Este token ja atingiu o ultimo estagio");

    uint256 newVal = NFTIndex(_tokenId) + 1;
    string memory newUri = IpfsUri[newVal];
    _setTokenURI(_tokenId, newUri);

    // Incrementa os atributos de um em um ponto
    for (uint256 i = 0; i < 2; i++) {
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

    mapping(uint256 => uint256) public strength; // Mapeia o ID do token para a força do Goblin
    mapping(uint256 => uint256) public agility; // Mapeia o ID do token para a agilidade do Goblin
    mapping(uint256 => uint256) public magic;   // Mapeia o ID do token para a magia do Goblin
    mapping(uint256 => uint256) public intelligence; // Mapeia o ID do token para a inteligência do Goblin

   
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

function getAttributes(uint256 _tokenId) public view returns (uint256 strengthValue, uint256 agilityValue, uint256 magicValue, uint256 intelligenceValue) {
    //require(_exists(_tokenId), "Token ID nao existe");

    strengthValue = strength[_tokenId];
    agilityValue = agility[_tokenId];
    magicValue = magic[_tokenId];
    intelligenceValue = intelligence[_tokenId];
}

function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721URIStorage) returns (bool) {
    return super.supportsInterface(interfaceId);
}


}