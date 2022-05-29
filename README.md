# A contract for gifting crypto
## Purpose of this contract

Its for giving out gifs to your friends,community and so on. I encountered the problem of a need of a 3rd party by gifting people in the crypto space besides just sending money to given wallets of course. So with this contract one could simply let people redeem the balance of the contract. Depending on the setting anyone or a specific one could redemm it.

## Giftcontract.sol
A contract which could be fund with the native token of the deployed chain. The balance of the contract can be redeemed by triggering the **getGift()** function. 

The owner can choose who is allowed to redeem the contract balance by setting it via the **defineNewAccessCondition()** function.

## GiftErc20Contract.sol
!!**under construction, needs some work for the funding part of the contract.**

A contract which could be fund with any ERC20 token. The balance of the contract can be redeemed by triggering the **getGift()** function. 

The owner can choose who is allowed to redeem the contract balance by setting it via the **defineNewAccessCondition()** function.


## Prerequisites
<ul  dir="auto">
<li><a  href="https://nodejs.org/en/download/"  rel="nofollow">Nodejs and npm</a>
You'll know you've installed nodejs right if you can run:


```
node --version
```
 and get an ouput like: <code>vx.x.x</code>
</ul>
<ul  dir="auto">
<li><a  href="https://hardhat.org/getting-started/"  rel="nofollow">hardhat</a>
You'll know you've installed hardhat right if you can run:

```
npx hardhat --version
```
and get an ouput like: <code>2.9.3</code>
</ul>
<ul  dir="auto">
Basic understand of js, hardhat and solidity. If you want to get basic understanding up to expert I highly recommend
the man, the myth, the legend: <a href="https://www.youtube.com/watch?v=M576WGiDBdQ&t=10s">Patrick Collins</a>
</ul>
<ul  dir="auto">
Some rinkeby eth if you deploying to rinkeby testnet, you could grap some <a href="https://faucets.chain.link/rinkeby">here</a>
</ul>



## dependencies
install dependencies: 
```
npm install --save-dev @openzeppelin/contracts @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai
```


## For the fast runners
## clone repository
fire up the git clone command: 
```
git clone https://github.com/MichiMich/GiftContract
```

## cd into it
```
cd GiftContract
```

## running tests
```
npx hardhat test
```

## and deploy it:
a) to local hardhat: 
```
npx hardhat run scripts/deploy_giftContract.js
```
