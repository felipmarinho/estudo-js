const readLine = require('readline');

const terminal = readLine.createInterface({
	// definir o modo de entrada via terminal
	input: process.stdin,
	// todo texto de saida sairá no terminal
	output: process.stdout
})

// texto do menu
const textoMenu = `
Olá, seja bem vindo ao sistema de media
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Herois
Digite 3 para acessar o menu de Guerreiras
Digite 0 para sair
`;

console.log('TextoMenu', textoMenu);
// const opcao = 3;
// switch (opcao) {
// 	case 1:
// 		console.log('Pressionou 1');
// 		break;
// 	case 2:
// 		console.log('Pressionou 2');
// 		break;
// 	case 3:
// 		console.log('Pressionou 3');
// 		break;
// 	default:
// 		break;
// }

/*
// Imprime algo no console e captura oq foi digitado no mesmo e submete ao pressionar o Enter
	terminal.question('Qual é seu nome? ', (msg) => {
	console.log('Você escreveu', msg);
	terminal.close;
});
*/

const questoes = {
	menuInicial: {
		texto: textoMenu,
		fn: menuInicial
	},
	opcao1: {
		texto: 'submenu! Pressione enter para selecionar mais opções...',
		fn: opcao1
	}
}
function opcao1(msg) {
	console.log('Não há mais opções!');
	terminal.close();
}
function menuInicial(msg) {
	// console.log('Acionando menu inicial!', msg);
	const opcao = Number(msg)
	if (isNaN(opcao)) {
		throw new Error('Não é um número', msg)
	}
	switch (opcao) {
		case 0:
			console.log('Saindo...');
			terminal.close();
			break;
		case 1:
			console.log('Menu inicial');
			terminal.question(
				questoes.opcao1.texto,
				questoes.opcao1.fn
			);
			break;
		default:
			console.log('Opção inválida');
			terminal.close();
			break;
	}
}

terminal.question(
	questoes.menuInicial.texto,
	questoes.menuInicial.fn
)