const web = require("./src/index");
const fs = require('fs');
const html = fs.readFileSync(__dirname+"/src/vista.html");
var html_string = html.toString();
var variables = html_string.match(/[^\{\}]+(?=\})/g);
let contenido = {
    ruta: (req, res) => 
{
    switch(req.url)
    {
        /*case "/":
            res.end(web.homepage);
            break;*/
        case "/":
            var titulo = web.homepage2.title;
            var contenido = web.homepage2.contenido;
            var footer = web.homepage2.footer;
            var seccion = "";
            
            for(val of variables)
            {
                var value = eval(val);
                html_string = html_string.replace("{"+val+"}",value);
            }
           res.write(html_string);
            res.end();
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