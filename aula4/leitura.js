const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

const clienteEmSting = JSON.stringify(dados);

console.log(clienteEmSting);
console.log(typeof clienteEmSting);