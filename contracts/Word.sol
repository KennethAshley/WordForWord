pragma solidity ^0.5.0;

import '@openzeppelin/contracts/ownership/Ownable.sol';

interface Energy {
  /// @return amount of VeThor in account '_owner'.
  function balanceOf(address _owner) external view returns (uint256 balance);

  /// @notice transfer '_amount' of VeThor from msg sender to account '_to'
  function transfer(address _to, uint256 _amount) external returns (bool success);
}

contract Word is Ownable {
  uint256 public currentPrice = 0;
  bytes32[] public words;
  bytes32[] public authors;
  uint256[] public prices;

  Energy energy = Energy(0x0000000000000000000000000000456E65726779);

  function withdraw() public onlyOwner {
    uint256 energyBalance = getEnergy();
    uint256 vetBalance = getBalance();

    energy.transfer(msg.sender, energyBalance);
    msg.sender.transfer(vetBalance);
  }

  function getEnergy() public view returns(uint256) {
    return energy.balanceOf(address(this));
  }

  function getBalance() public view returns(uint256) {
    return address(this).balance;
  }

  function addWord(bytes32 _wordHash, bytes32 _authorHash) public payable {
    require(msg.value >= currentPrice, 'must more than the previous amount');

    words.push(_wordHash);
    prices.push(msg.value);
    authors.push(_authorHash);
    currentPrice = msg.value + 20000000000000000000;
  }

  function getCurrentPrice() public returns(uint256) {
    return currentPrice;
  }

  function getWords() public returns(bytes32[] memory) {
    return words;
  }

  function getAuthors() public returns(bytes32[] memory) {
    return authors;
  }

  function getPrices() public returns(uint256[] memory) {
    return prices;
  }
}
