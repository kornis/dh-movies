const fs = require("fs");
const movies = JSON.parse(fs.readFileSync(__dirname + "/../data/movies.json","UTF-8"));
let cartelera = "En Cartelera \n\n";

for(peli of movies.movies)
{
cartelera += "Titulo: "+peli.title + '\n' + peli.overview + '\n \n';
}

module.exports = cartelera;