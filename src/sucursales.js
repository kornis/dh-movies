const fs = require("fs");
const file = JSON.parse(fs.readFileSync(__dirname + "/../data/theaters.json","UTF-8"));
let sucursales = "Nuestras Salas\n";
sucursales += "Cantidad de salas: "+  file.total_theaters + "\n";

for(sala of file.theaters)
{
    sucursales += "\nSala: "+ sala.name + "\n" + "Direccion: " + sala.address + "\n" + sala.description + "\n\n";
}
module.exports = sucursales;