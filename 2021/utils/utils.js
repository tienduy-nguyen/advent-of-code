const { readFileSync } = require('fs')

exports.readData = (fileName, convertToNumber = false)=>{
    try {
        const raw =  readFileSync(fileName,  'utf8').toString().split("\n")
        return convertToNumber ? raw.map(i => Number(i)) : raw
    } catch (err) {
        console.error(err)
    }
}