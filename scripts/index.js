module.exports = async callback => {
    try {
        const Box = artifacts.require('Box');
        const box = await Box.deployed();

        // Store some value in Box
        await box.store(12)
        const retrieved = await box.retrieve();
        console.log(`Box value is: ${retrieved.toString()}`)
        callback(0);
        
    } catch (error) {
        console.error(error)
        callback(1)
    }
}