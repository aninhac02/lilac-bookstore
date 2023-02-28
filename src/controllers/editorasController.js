import editoras from "../models/Editora.js";

class EditoraController {

    static findAll = (req, res) => {
        editoras.find((err, editoras) => {
            res.status(200).json(editoras);
        })
    }

    static findById = (req, res) => {
        const id = req.params.id;

        editoras.findById(id, (err, editoras) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Editora não encontrado`})
            }
            res.status(200).send(editoras);
        })
    }

    static save = (req, res) => {
        let editora = new editoras(req.body);

        editora.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar editora.`})
            }
            res.status(201).send(editora.toJSON())       
        })
    }

    static update = (req, res) => {
        const id = req.params.id;

        editoras.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }
            res.status(200).send({message: 'Editora atualizado com sucesso'})
        })
    }

    static delete = (req, res) => {
        const id = req.params.id;

        editoras.findByIdAndDelete(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }
            res.status(200).send({message: 'Editora deletado com sucesso'})
        })
    }

}

export default EditoraController