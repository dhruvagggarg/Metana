// require("@nomicfoundation/hardhat-toolbox");

// * @type import('hardhat/config').HardhatUserConfig 
// module.exports = {
//   solidity: "0.8.17",

// };
require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork:"polygon",
  networks:{
    hardhat:{
    },
    polygon:{
      url :"https://polygon-mumbai.g.alchemy.com/v2/MeKFrDq5O-mlM8I0CzXpKg0pRvdNRjxF",
      accounts:["4b37e644ab78c477cf92ed880dd52d5b0d50bfe36056696d1e05ba480d5abaa3"]
    }
  },
  paths:{
    sources:"./contracts",
    tests:"./test",
    cache:"./cache",
    artifacts:"./artifacts"
  },
};
//  add 0x5cCcE0939850330F15f542ddf8822024Ff38265C
