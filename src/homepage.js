
const fs = require("fs");
const movies = JSON.parse(fs.readFileSync(__dirname + "/../data/movies.json","UTF-8"));
let homepage = "Bienvenidos a DH-Movies - El mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.\n\n";
let peliculas = movies.movies.map(movie=>movie.title).sort();
homepage += "Peliculas: " +"\n";
for(peli of peliculas)
{
    homepage += peli + "\n";
}
homepage+= "\n"+ "Total de peliculas: " + movies.total_movies;
homepage += "\n" + "Recordá que podes visitar las secciones: *En Cartelera \t * Mas Votadas \t *Sucursales \t *Contacto \t *Preguntas Frecuentes";

module.exports = homepage;