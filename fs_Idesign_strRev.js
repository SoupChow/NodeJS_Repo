const fs = require('fs')

const data = fs.readFileSync('./input.txt',{encoding:'utf8',flag:'r'})
const writer = fs.createWriteStream('./output.txt')
var n = data.length
var revStr = "";
var i;
for(i=n-1;i>=0;i--){
    revStr=revStr+data[i];
}
writer.write(revStr)
writer.end()