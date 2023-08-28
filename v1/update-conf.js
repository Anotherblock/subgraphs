const fs = require('fs');
const path = require('path');

const ABDropManagerMainnet = require('web3-config/deployments/mainnet/ABDropManagerV2_Proxy.json');
const ABDropManagerGoerli = require('web3-config/deployments/goerli/ABDropManagerV2.json');

const AnotherPFPMainnet = require('web3-config/deployments/mainnet/AnotherPFP.json');
const AnotherPFPGoerli = require('web3-config/deployments/goerli/AnotherPFP.json');

// const ABRoyaltyV1Mainnet = require('web3-config/deployments/mainnet/ABRoyaltyV1.json');
// const ABRoyaltyV1Goerli = require('web3-config/deployments/goerli/ABRoyaltyV1.json');

const Another721Mainnet = require('web3-config/deployments/mainnet/Another721.json');
const Another721Goerli = require('web3-config/deployments/goerli/ABDrop4.json');

const main = () => {
  const mainnetConfigPath = path.join(__dirname, 'config/mainnet.json');
  const goerliConfigPath = path.join(__dirname, 'config/goerli.json');

  try {
    let mainnetConfig = require(mainnetConfigPath);
    let goerliConfig = require(goerliConfigPath);

    mainnetConfig.block = ABDropManagerMainnet.receipt.blockNumber;
    mainnetConfig.DROP_MANAGER_ADDRESS = ABDropManagerMainnet.address;
    mainnetConfig.ANOTHER721_ADDRESS = Another721Mainnet.address;
    mainnetConfig.PFP_ADDRESS = AnotherPFPMainnet.address;
    // mainnetConfig.ROYALTY_ADDRESS = ABRoyaltyV1Mainnet.address;

    goerliConfig.block = ABDropManagerGoerli.blockNumber;
    goerliConfig.DROP_MANAGER_ADDRESS = ABDropManagerGoerli.address;
    goerliConfig.ANOTHER721_ADDRESS = Another721Goerli.address;
    goerliConfig.PFP_ADDRESS = AnotherPFPGoerli.address;

    // goerliConfig.ROYALTY_ADDRESS = ABRoyaltyV1Goerli.address;

    fs.writeFileSync(mainnetConfigPath, JSON.stringify(mainnetConfig, null, 2));
    fs.writeFileSync(goerliConfigPath, JSON.stringify(goerliConfig, null, 2));
  } catch (e) {
    console.log(e);
  }
};

main();
