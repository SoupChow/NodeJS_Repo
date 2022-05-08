var validator = require('validator');

const email = process.argv[2];
const bool = validator.isEmail(email);
if(bool===true){
    console.log('Valid');
}
else{
    console.log('Invalid')
}

