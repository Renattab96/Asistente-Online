const mongoose  = require("mongoose")


const  tareaschema = mongoose.Schema({
    accion:{
        type:String,
        required:[true,"Ingrese descripcion"],
        minlength:[5,"La descripción debe tener minimo 10 caracteres."]
    }, 
    fechainicio: {
        
        type: Date,
    	default: Date.now,
        required: [true, "You must select a date"]
    },
    fechavecimiento: {
       
        type: Date,
    	default: Date.now,
        required: [true, "You must select a date"]
    },
    status: {
        type: String,
        enum:["uno" , "dos", "tres"],
        default:"uno" ,
       
    },
    claseTarea: {
        type: String,
        enum:["Hogar" , "Personal", "Administrativo","Laboral","Academico"],
    },
    hora: {
        type: String, // Cambiar de Number a String para manejar horas en formato HH:mm
        required: true,
        validate: {
          validator: function(v) {
            // Validar que el formato sea HH:mm
            return /^\d{2}:\d{2}$/.test(v);
          },
          message: props => `${props.value} no es un formato de hora válido (HH:mm).`
        }
    },
    descripcion: {
        type: String,
        required: false
    },
    // userId: {   // Nuevo campo para almacenar el ID del usuario
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    //   }
   
},{timestamps:true});


const tarea = mongoose.model('tarea',tareaschema);
module.exports = tarea
