const fs = require('fs')

const length = 3140
const index = 0
const picLoop = async () => {
  console.log('???')
  const curImg = fs.readFile(`${index}`.jpg)
  console.log(curImg)
}