
import { handleSubmit, fetchTareas,handleDelete} from "../controllers/tareas.controllers" 
import { Router } from "express"
Router


const router = Router();
router.route("/tareas").get(fetchTareas).post(handleSubmit);


router.route("/productos/:id").delete(handleDelete)
export default router;