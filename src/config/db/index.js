const mongoose = require('mongoose');
 
 async function connect () {
    try {
    await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
    console.log('connect succeeded');
    }catch(err) {
    console.log('connect failed');
    }
}

module.exports = {connect};