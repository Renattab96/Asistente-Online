const mongoose  = require("mongoose")


const  gastoschema = mongoose.Schema({
   
    concepto:{
        type:String,
        required:[true,"Ingrese el nombre del balance "],
       
    },
    monto:{
        type:Number,
        required:[true,"Ingrese el nombre del balance "],
    },
    periodo:[{
        type:Number,

    }]
    
   
},{timestamps:true});
// balancechema.plugin(uniqueValidator);


const gastos = mongoose.model('gastos',gastoschema);
module.exports = gastos