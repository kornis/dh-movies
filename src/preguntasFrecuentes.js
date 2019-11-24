const fs = require("fs");
const file = JSON.parse(fs.readFileSync(__dirname + "/../data/faqs.json","UTF-8"));
let faqs = "Preguntas Frecuentes";
faqs += "\n Cantidad de preguntas frecuentes: " + file.total_faqs;


for(pregunta of file.faqs)
{
    faqs += "\n Pregunta: " + pregunta.faq_title + "\n" + "Respuesta: " + pregunta.faq_answer + "\n\n";
}

module.exports = faqs;
