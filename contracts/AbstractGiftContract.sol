//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract AbstractGiftContract is Ownable {
    address s_AllowedAddress;
    bool s_giftAllowedForAnyone;

    constructor() {
        s_AllowedAddress = msg.sender; //first sets the address of the deployer to be allowed
    }

    function fund() public payable {}

    function getGift() public {
        require(address(this).balance > 0, "contract balance=0");
        require(
            msg.sender == s_AllowedAddress || s_giftAllowedForAnyone,
            "you are not allowed to withdraw"
        );
        payable(msg.sender).transfer(address(this).balance);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getAccessCondition() public view returns (address, bool) {
        return (s_AllowedAddress, s_giftAllowedForAnyone);
    }

    function defineNewAccessCondition(
        address _allowedAddress,
        bool _allowForAnyone
    ) public onlyOwner {
        s_AllowedAddress = _allowedAddress;
        s_giftAllowedForAnyone = _allowForAnyone;
    }
}
