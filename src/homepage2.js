
const fs = require("fs");
const movies = JSON.parse(fs.readFileSync(__dirname + "/../data/movies.json","UTF-8"));
let title = "Bienvenidos a DH-Movies\n <h3>El mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.</h3>\n\n";
let peliculas = movies.movies.map(movie=>movie.title).sort();
let contenido = "Peliculas: " +"\n";
for(peli of peliculas)
{
    contenido += peli + "\n";
}
contenido+= "\n"+ "Total de peliculas: " + movies.total_movies;
let footer = "\n" + "Recordá que podes visitar las secciones: *En Cartelera \t * Mas Votadas \t *Sucursales \t *Contacto \t *Preguntas Frecuentes";

module.exports = {title, contenido, footer};