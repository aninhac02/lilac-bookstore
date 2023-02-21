import livros from "../models/Livro.js";

class LivroController {

    static findAll = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        })
    }

    static findById = (req, res) => {
        const id = req.params.id;

        livros.findById(id, (err, livros) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Livro não encontrado`})
            }
            res.status(200).send(livros);
        })
    }

    static save = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
            }
            res.status(201).send(livro.toJSON())       
        })
    }

    static update = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }
            res.status(200).send({message: 'Livro atualizado com sucesso'})
        })
    }

    static delete = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, {$set: req.body}, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }
            res.status(200).send({message: 'Livro deletado com sucesso'})
        })
    }

}

export default LivroController