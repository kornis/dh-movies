const web = require("./src/index");
let contenido = {
    ruta: (req, res) => 
{
    switch(req.url)
    {
        case "/":
            res.end(web.homepage);
            break;
        case "/en-cartelera":
            res.end(web.cartelera);
            break;
        case "/contacto":
            res.end(web.contacto);
            break;
        case "/mas-votadas":
            res.end(web.masVotadas);
            break;
        case "/preguntas-frecuentes":
            res.end(web.faqs);
            break;
        case "/sucursales":
            res.end(web.sucursales);
            break;
        default:
            res.end(404,"No se ha encontrado la web solicitada...");
            break;
    }
}};

module.exports = contenido;