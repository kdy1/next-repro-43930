const path = require("path");
const fs = require("fs");
const solc = require("solc");

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "Lottery.sol": {
      content: source
    }
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"]
      }
    }
  }
};

const { contracts } = JSON.parse(solc.compile(JSON.stringify(input)));
const { abi, evm } = contracts["Lottery.sol"].Lotery;

module.exports = {
  abi,
  bytecode: evm.bytecode.object
};
