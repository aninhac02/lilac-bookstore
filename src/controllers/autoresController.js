import autores from "../models/Autor.js";

class AutorController {

    static findAll = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    }

    static findById = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Autor não encontrado`})
            }
            res.status(200).send(autores);
        })
    }

    static save = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`})
            }
            res.status(201).send(autor.toJSON())       
        })
    }

    static update = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }
            res.status(200).send({message: 'Autor atualizado com sucesso'})
        })
    }

    static delete = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }
            res.status(200).send({message: 'Autor deletado com sucesso'})
        })
    }

}

export default AutorController