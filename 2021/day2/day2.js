const {readData} = require('../utils/utils')

const resolvePart1= (inputFile) => {
    const data = readData(inputFile)
    let x = 0, y = 0
    data.forEach(line => {
        line.startsWith('forward')
            ? x += Number(line.replace('forward ',''))
            : line.startsWith('up')
                ? y += Number(line.replace('up ',''))
                : y -= Number(line.replace('down ',''))
    })
    return Math.abs(x*y)
}

const resolvePart2 = (inputFile) => {
    const data = readData(inputFile)
    let horizontal = 0, depth = 0
    let aim = 0
    data.forEach(line => {
        if(line.startsWith('up')) depth -= Number(line.replace('up ',''))
        else if (line.startsWith('down')) depth += Number(line.replace('down ',''))
        else {
            const forward = Number(line.replace('forward ',''))
            horizontal += forward
            aim += forward * depth
        }

    })
    return Math.abs(horizontal*aim)
}

console.log(resolvePart1('day2_input_sample'))
console.log(resolvePart1('day2_input'))


console.log(resolvePart2('day2_input_sample'))
console.log(resolvePart2('day2_input'))

// Another way to read data
