const hhtp = require("http")
const port = 3000;

const routes = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/editoras': 'Listagem de editoras'

}

const server = hhtp.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(routes[req.url]);
})

server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})
