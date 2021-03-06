// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MarrowUpgradeableV2 is Initializable {
    uint256 public x;
    uint256 public y;

    function initialize(uint256 _x) public initializer {
        x = _x;
    }

    function setY(uint256 _y) public {
        y = _y;
    }
}
