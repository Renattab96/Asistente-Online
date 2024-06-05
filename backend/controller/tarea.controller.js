const tarea =require('../model/tarea.model')
const Usuario =require('../model/user.model')

        // const creartarea = async (req, res) => {
        //     const {id} = req.params;
        //     try {
        //         const usuario = await Usuario.findById(id).exec();
        //         console.log(usuario, "aqui usuario");
        //         const tareanew = new tarea({
        //             ...req.body,
        //             status: "uno" // Establecer estado inicial
        //         });
        //         console.log(tareanew._id, "id tarea");
        //         usuario.tarea.addToSet(tareanew._id);
        //         await usuario.save();
        //         await tareanew.save();
        //         res.status(201).json(tareanew); // Corregir la respuesta para devolver la tarea nueva
        //     } catch (error) {
        //         console.log(error);
        //         res.status(500).json({error: 'Error al crear la tarea'});
        //     }
        //     };
        const creartarea = async (req, res) => {
            const { accion, fechainicio, fechavencimiento, status, claseTarea, hora, descripcion } = req.body;
            const userId = req.user._id; // Asumiendo que el middleware de autenticación añade el usuario al request
          
            try {
              const tarea = new Tarea({ accion, fechainicio, fechavencimiento, status, claseTarea, hora, descripcion, userId });
              await tarea.save();
              res.status(201).json(tarea);
            } catch (error) {
              res.status(400).json({ message: error.message });
            }
          };
            
        const obtenerUnatarea=(req, res)=>{
            tarea.findById(req.params.id)
            .then(tarea=>{
                // res.json(resultado)
                if(tarea){
                    return res.status(200).json(tarea);
                }
                else{
                    res.statusMessage = "La tarea indicada no existe.";
                    return res.status(404).end();
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        const tareasactuales=(req, res)=>{
            tarea.find(req.body)
            .then( (resultado)=>{
              
                res.json(resultado)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        const eliminartarea=(req, res)=>{
            const {id} = req.params;

            tarea.findByIdAndDelete({_id:id})
            // tarea.deleteOne({_id: req.params.id})
            .then(()=>{
                // res.json(resultado)
                return res.status(204).end();                
            })
            .catch((error)=>{
                res.statusMessage = "Hubo un error al intentar eliminar la película. "+error;
                // console.log(error)
                return response.status(400).end();
            })
        }

        const editartarea=(req, res)=>{
            tarea.updateOne({_id: req.params.id},req.body)
            .then((resultado)=>{
                res.json(resultado)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        const creartareaindi=(req, res)=>{
            tarea.create(req.body)
            .then((resultado)=>{
                res.json(resultado)
            }).catch((error)=>{
                console.log(error)
            })
        }
        const TareasByUser = async (req, res) => {
            const { userId } = req.params;

            try {
              const tareas = await tarea.find({ userId });
              res.status(200).json(tareas);
            } catch (error) {
              res.status(400).json({ message: error.message });
            }
          };
        



        module.exports={
            creartarea,
            obtenerUnatarea,
            tareasactuales,
            eliminartarea,
            editartarea,
            creartareaindi,
            TareasByUser
        }
