var fs = require('fs');

const data = fs.readFileSync('./input.txt',{encoding:'utf8',flag:'r'})
const writer = fs.createWriteStream('output.txt')
writer.write(data)
writer.end();