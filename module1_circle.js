//app.js
const func = require('./Circle.js')
console.log("Area of the circle is "+func.computeArea(5).toFixed(2))
console.log("Circumference of the circle is "+func.computePerimeter(5).toFixed(2))

//Circle.js
const computeArea = function(r){
    const area = 3.14*parseInt(r)*parseInt(r);
    return area;
}   

const computePerimeter = function(r){
    const peri = 2*3.14*parseInt(r);
    return peri;
}

module.exports={computeArea,computePerimeter}









//Fill your code
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Adding',
    builder:{
        title:{
            describe:'Title',
            demandOption: true,
            type: 'string'
        },
        description:{
            describe:'Description',
            demandOption: false,
            type: 'string'
        },
        price:{
            describe:'Price',
            demandOption: 'price',
            type: 'number'
        }
    },
    handler:function(argv){
        console.log('Adding a Book');
        console.log(argv.title);
        console.log(argv.description);
        console.log(argv.price)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing',
    builder: {
        title: {
            describe:'Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Removing a Book');
        console.log(argv.title);
    }
})

yargs.parse();









//Fill your code
const mathjs = require('mathjs')
let exp = process.argv[2];
console.log(mathjs.evaluate(exp))



