import express  from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.findAll)
    .get("/livros/busca", LivroController.findBookByPublishingCompany)
    .get("/livros/:id", LivroController.findById)
    .post("/livros", LivroController.save)
    .put("/livros/:id", LivroController.update)
    .delete("/livros/:id", LivroController.delete)


export default router;