const FlexiCoin = artifacts.require('Flexi');

module.exports = async (deployer, network, [admin]) => {
    await deployer.deploy(FlexiCoin, 'Flexi', 'FXT', { from: admin });
}