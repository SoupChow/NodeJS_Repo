// Fill your code here
const fs = require('fs')
const data = fs.readFileSync('./books.txt',{encoding:'utf8',flag:'r'})
console.log(data);

//Fill your code
const fs = require('fs');
const book = {
name : 'Great Expectations',
description :'Classics loved by all',
price : 100
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('books.json',bookJSON)

//Fill your code
const fs = require('fs')
const dataBuffer = fs.readFileSync('./books.json')
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
for(let v of data){
    console.log(v)
}


