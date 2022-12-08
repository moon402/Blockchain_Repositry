const axios = require('axios')
const blockModel = require('./crypto')

const getCoins = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "https://api.coincap.io/v2/assets",
        }
        let result = await axios(options)

        let cryptoData = result.data
        console.log(result)
        let arrData = cryptoData.data
        let sorteddata = arrData.sort((a, b) => { b.changePercent24Hr - a.changePercent24Hr })
        await blockModel.deleteMany()
        let finalData = await blockModel.create(sorteddata)
        return res.status(200).send({ status: true, data: finalData })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getCoins = getCoins