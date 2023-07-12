import Tarea from "../model/tarea";

export const  fetchTareas = async (req, res) => {
    try {
      const usuarios = await Tarea.find();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(404).json(error);
    }
  };

  export const handleSubmit = async (req, res) => {
    try {
      const productoNuevo = new Tarea(req.body);
      await productoNuevo.save();
      res.status(201).json({
        mensaje: "el producto se creo correctamente",
      }); //201 hace referencia a que se creo algo
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "error al crear los productos",
      });
    }
  };
  export const handleDelete = async (req, res) => {
    try {
      //pedir a la base de datod borrar el productos
      console.log(req.params.id);
      await Tarea.findByIdAndDelete(req.params.id);
      res.status(200).json({
        mensaje: "producto eliminado correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        mensaje: "error al borrar los productos",
      });
    }
  };