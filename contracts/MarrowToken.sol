// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MarrowToken is ERC20 {
    constructor() ERC20("MarrowToken", "MTK") {
        _mint(msg.sender, 100 ether);
    }
}
