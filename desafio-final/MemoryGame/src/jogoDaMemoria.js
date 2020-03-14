class JogoDaMemoria {
	// se mandar um obj = { tela: 1, idade: 2, etc: 3}
	// vai ignorar o resto das propriedades e pegar somente a propriedade
	// tela
	constructor({ tela }) {
		this.tela = tela
		this.heroisIniciais = [
			{ img: './arquivos/batman.png', nome: 'Batman'},
			{ img: './arquivos/cap.png', nome: 'Capitão America'},
			{ img: './arquivos/demolidor.png', nome: 'Demolidor'},
			{ img: './arquivos/Flash.png', nome: 'Flash'},
			{ img: './arquivos/gaviao.png', nome: 'Gaviao'},
			{ img: './arquivos/groot.png', nome: 'Groot'},
			{ img: './arquivos/logan.png', nome: 'Logan'},
			{ img: './arquivos/thor.png', nome: 'Thor'},
		]
	}
	// para user o this, não podemos usar static!
	inicializar() {
		// vai pegar todas as funções da classe tela!
		// colocar todos herois na tela
		this.tela.atualizarImagens(this.heroisIniciais);
		this.tela.configurarBotaoJogar(this.jogar.bind(this))
	}

	embaralhar () {
		const copias = this.heroisIniciais
		// duplicar os itens
		.concat(this.heroisIniciais)
		//entrar em cada item e criar um id aleatorio
		.map(item => {
			return Object.assign({}, item, { id: Math.random() / 0.5 })
		})
		// ordenar aleatoriamente
		.sort(() => Math.random() - 0.5)
		this.tela.atualizarImagens(copias)
	}

	jogar() {
		this.embaralhar();
	}
}