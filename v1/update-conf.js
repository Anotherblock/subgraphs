const fs = require("fs");
const path = require("path");

const ABDropManagerMainnet = require("./abis/deployments/mainnet/ABDropManagerV2_Proxy.json");
const ABDropManagerGoerli = require("./abis/deployments/goerli/ABDropManagerV2.json");

const AnotherPFPMainnet = require("./abis/deployments/mainnet/AnotherPFP.json");
const AnotherPFPGoerli = require("./abis/deployments/goerli/AnotherPFP.json");

const Another721Mainnet = require("./abis/deployments/mainnet/Another721.json");
const Another721Goerli = require("./abis/deployments/goerli/ABDrop4.json");

const main = () => {
  const mainnetConfigPath = path.join(__dirname, "config/mainnet.json");
  const goerliConfigPath = path.join(__dirname, "config/goerli.json");

  try {
    let mainnetConfig = require(mainnetConfigPath);
    let goerliConfig = require(goerliConfigPath);

    mainnetConfig.block = ABDropManagerMainnet.receipt.blockNumber;
    mainnetConfig.DROP_MANAGER_ADDRESS = ABDropManagerMainnet.address;
    mainnetConfig.ANOTHER721_ADDRESS = Another721Mainnet.address;
    mainnetConfig.PFP_ADDRESS = AnotherPFPMainnet.address;

    goerliConfig.block = ABDropManagerGoerli.blockNumber;
    goerliConfig.DROP_MANAGER_ADDRESS = ABDropManagerGoerli.address;
    goerliConfig.ANOTHER721_ADDRESS = Another721Goerli.address;
    goerliConfig.PFP_ADDRESS = AnotherPFPGoerli.address;

    fs.writeFileSync(mainnetConfigPath, JSON.stringify(mainnetConfig, null, 2));
    fs.writeFileSync(goerliConfigPath, JSON.stringify(goerliConfig, null, 2));
  } catch (e) {
    console.log(e);
  }
};

main();
