// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract MarrowCollection is ERC1155, Ownable {
    string public contractURI =
        "https://api-mainnet.rarible.com/contractMetadata/0x5C6e2892Ed14bD178F0928AbCe94C1373B8265eB";

    constructor() ERC1155("https://api.mybae.io/tokens/") {
    }

    function mint(
        address _to,
        uint256 _id,
        uint256 _amount
    ) external onlyOwner {
        _mint(_to, _id, _amount, "");
    }

    function mintBatch(
        address _to,
        uint256[] memory _ids,
        uint256[] memory _amounts
    ) external onlyOwner {
        _mintBatch(_to, _ids, _amounts, "");
    }

    function tokenURI(uint256 _tokenId) public view returns (string memory) {
        return string(abi.encodePacked(uri(0), Strings.toString(_tokenId)));
    }
}
