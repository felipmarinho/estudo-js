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
		this.iconePadrao = './arquivos/padrao.png';
		this.heroisEscondidos = []
		this.heroisSelecionados = []
	}
	// para user o this, não podemos usar static!
	inicializar() {
		// vai pegar todas as funções da classe tela!
		// colocar todos herois na tela
		this.tela.atualizarImagens(this.heroisIniciais);
		this.tela.configurarBotaoJogar(this.jogar.bind(this))
		this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
	}

	embaralhar () {
		console.log('heroisIniciais', this.heroisIniciais);
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
		console.log('Copias', copias);
		
		// vamos esperar 1 segundo para atualizar a tela
		setTimeout(() => {
			this.esconderHerois(copias);
		}, 1000)
	}

	esconderHerois(herois) {
		//vamos trocar a imagem de todos herois existentes
		// pelo icone padrão
		//  como fizemos no construtor, vamos extrair somente o necessario
		// usando a sintaxe ({ chave: 1 }) estamos falando que vamos retornar
		// o que tiver dentro dos parenteses
		// quando não usamos : (exemplo do id), o JS entende que o nome
		// é o mesmo do valor. Ex. id: id vira id,
		const heroisOcultos = herois.map(({ nome, id }) => ({
			id,
			nome,
			img: this.iconePadrao,
		}))
		// atualizamos a tela com os herois ocultos
		this.tela.atualizarImagens(heroisOcultos);
		this.heroisOcultos = heroisOcultos;
	}

	verificarSelecao(id, nome) {
		const item = { id, nome }
		 // vamos verificar a quantidade de herois selecionados
		 // e tomar ação se escolheu certo ou errado
		 const heroisSelecionados = this.heroisSelecionados.length
		 switch (heroisSelecionados) {
			 case 0:
				 // adiciona a escolha na lista, esperando pela proxima
				 // clicada
				 this.heroisSelecionados.push(item)
				 break;
			case 1:
					// se a quantidade de escolhidos for 1, significa
					// que o usuario só pode escolher mais um
					// vamos obter o primeiro item da lista
					const [opcao1] = this.heroisSelecionados
					// zerar item para não selecionar mais dois
					this.heroisSelecionados = []
					// conferimos se os nomes e ids batem conforme o esperado
					if (opcao1.nome === item.nome && 
						// aqui verificamos se são ids diferentes para
						// o usuario não cliar duas vezes no mesmo
						opcao1.id !== item.id
						) {
							alert('combinação correta!', item.nome);
							return;
						}
						alert('combinação incorreta!');
				break;
			 default:
				 break;
		 }
	}

	jogar() {
		this.embaralhar();
	}
}