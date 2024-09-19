export const abi = [
  "function safeMint() returns (uint256)",
  "function getOwnedTokens() view returns (uint256[])",
  "function getAttributes(uint256 _tokenId) view returns (uint256 strengthValue, uint256 agilityValue, uint256 magicValue, uint256 intelligenceValue, uint256 levelValue)",
  "function rotatePhoto(uint256 _tokenId)",
  "function IpfsUri() view returns (string[])",
  "function ownerOf(uint256 _tokenId) view returns (address)",
  "function tokenURI(uint256 tokenId) view returns (string)",
  "function increaseLevel(uint256 _tokenId)",
  "function increaseStrength(uint256 _tokenId)",
  "function increaseAgility(uint256 _tokenId)",
  "function increaseMagic(uint256 _tokenId)",
  "function increaseIntelligence(uint256 _tokenId)",
  "function supportsInterface(bytes4 interfaceId) view returns (bool)"
];
