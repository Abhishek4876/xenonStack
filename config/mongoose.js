const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://anish123:anish@cluster0.wrim3.mongodb.net/xenon');



const db = mongoose.connection;
db.on('error',console.error.bind(console,"error connecting to database"));

db.once('open',function(){
    console.log('connected to Database : MongoDB')
});
module.exports=db;