import express  from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", AutorController.findAll)
    .get("/autores/:id", AutorController.findById)
    .post("/autores", AutorController.save)
    .put("/autores/:id", AutorController.update)
    .delete("/autores/:id", AutorController.delete)


export default router;