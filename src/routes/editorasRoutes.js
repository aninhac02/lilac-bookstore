import express  from "express";
import EditoraController from "../controllers/editorasController.js";

const router = express.Router();

router
    .get("/editoras", EditoraController.findAll)
    .get("/editoras/:id", EditoraController.findById)
    .post("/editoras", EditoraController.save)
    .put("/editoras/:id", EditoraController.update)
    .delete("/editoras/:id", EditoraController.delete)


export default router;