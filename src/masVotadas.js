const fs = require("fs");
const moviesFile = JSON.parse(fs.readFileSync(__dirname + "/../data/movies.json"));
let masVotadas = "Mas Votadas\n\n";
let pelis = moviesFile.movies.filter(peli=>peli.vote_average >= 7);
let total_pelis = pelis.length;
let promedio = 0;
for(peli of pelis)
{
    masVotadas += peli.title + "\n" + peli.vote_average + "\n" + peli.overview + "\n";
    promedio = promedio + peli.vote_average;
}
masVotadas += "Promedio de puntaje: " + (promedio/total_pelis).toFixed(2);

module.exports = masVotadas;