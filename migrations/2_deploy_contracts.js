const InfinityMoney = artifacts.require("InfinityMoney");

module.exports = function(deployer) {
  deployer.deploy(InfinityMoney);
};
