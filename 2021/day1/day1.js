const { readData } = require('../utils/utils.js')

const resolve_part1 = (inputFile)=>{
    const data = readData(inputFile, true)
    //const list = data.reduce((result, cur, index, arr) => cur > arr[index-1] ? [...result, cur] : result, [] )
    let count = 0
    for (let i = 0; i < data.length; i++) {
        if(data[i+1] > data[i]) ++count
    }
    return count
}

// a + b + c < b + c + d can be canceled down to a < d.
const resolve_part2 = (inputFile)=>{
    const data = readData(inputFile, true)
    let count = 0
    for (let i = 3; i < data.length; i++) {
        if(data[i] > data[i-3]) ++count
    }
    return count
}

//console.log(readData('day1_input_sample'))
console.log(resolve_part1('day1_input'))
console.log(resolve_part2('day1_input'))