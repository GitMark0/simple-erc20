// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";

contract MyNFT is ERC721, Ownable {
    uint256 public counter;
    uint256 public maxTokens;

    string public constant baseURI = "https://api.ballmanproject.io/bmtoken/";

    constructor() ERC721("MyNFT", "MNFT") {
        maxTokens = 5;
    }

    function mint(address to) external onlyOwner {
        require(counter < maxTokens, "Token limit reached");
        _mint(to, counter);
        counter++;
    }

    function setMaxTokens(uint256 _maxTokens) external onlyOwner {
        require(_maxTokens >= maxTokens, "Invalid max tokens");
        maxTokens = _maxTokens;
    }

    function tokenURI(uint256 tokenId)
        public
        pure
        override
        returns (string memory)
    {
        return string(abi.encodePacked(baseURI, tokenId));
    }
}
