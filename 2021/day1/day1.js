const { readFileSync } = require('fs')

const readData = (fileName)=>{
    try {
        return readFileSync(fileName,  'utf8').toString().split("\n").map(i => Number(i))
    } catch (err) {
        console.error(err)
    }

}

const resolve_part1 = (inputFile)=>{
    const data = readData(inputFile)
    //const list = data.reduce((result, cur, index, arr) => cur > arr[index-1] ? [...result, cur] : result, [] )
    const list = []
    for (let i = 0; i < data.length; i++) {
        if(data[i+1] > data[i]) list.push(data[i])
    }
    return list.length
}

const resolve_part2 = (inputFile)=>{
    const data = readData(inputFile)
    const list = []
    for (let i = 3; i < data.length; i++) {
        if(data[i] > data[i-3]) list.push(data[i])
    }
    return list.length
}

//console.log(readData('day1_input_sample'))
console.log(resolve_part1('day1_input'))
console.log(resolve_part2('day1_input'))