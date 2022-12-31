/* eslint-disable no-undef */
const MarcadoNFT = artifacts.require('MarcadoNFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(MarcadoNFT, 'Marcado NFTs', 'MNT', 10, accounts[1])
}