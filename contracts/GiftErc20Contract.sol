//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20 {
    function transfer(address _to, uint256 _amount) external returns (bool);

    function balanceOf(address account) external view returns (uint256);
}

contract GiftErc20Contract is Ownable {
    address s_AllowedAddress;
    bool s_giftAllowedForAnyone;

    constructor() {
        s_AllowedAddress = msg.sender; //first sets the address of the deployer to be allowed
    }

    function fund(address _tokenContract, uint256 _amount) public payable {
        //todo: check balance of msg.sender of this specific token, allow contract to recieve the tokens?, fund contract,
    }

    function withdrawToken(address _tokenContract, uint256 _amount) external {
        require(_tokenContract != address(0), "invalid token contract");
        require(
            _tokenContract != address(0) &&
                (msg.sender == s_AllowedAddress || s_giftAllowedForAnyone),
            "invalid data"
        );

        IERC20 tokenContract = IERC20(_tokenContract);
        require(
            _amount > 0 && _amount <= tokenContract.balanceOf(address(this)),
            "invalid amount"
        );
        // transfer the token from address of this contract
        // to address of the user who is executing the withdrawToken() function
        tokenContract.transfer(msg.sender, _amount);
    }

    function getBalanceOfToken(address _tokenContract)
        public
        view
        returns (uint256)
    {
        IERC20 tokenContract = IERC20(_tokenContract);
        return tokenContract.balanceOf(address(this));
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
