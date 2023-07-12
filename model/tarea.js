import { Schema, model } from "mongoose";

const tareaSchema = new Schema({
  nombreTarea: {
    type: String,
    required: true,
  },
});

const Tarea = model('Tarea', tareaSchema);

export default Tarea;