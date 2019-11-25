const http = require('http');
const router = require('./router');


http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	router.ruta(req,res);
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));