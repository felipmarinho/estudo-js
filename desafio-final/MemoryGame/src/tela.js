// metodos estáticos não podem acessar o 'this'
// por isso, não vamos colocar o util no construtor
const util = Util

const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const ID_CONTADOR = "contador"
const ID_CARREGANDO = "carregando"
const CLASSE_INVISIVEL = "invisible"
const MENSAGEM = {
	sucesso: {
		texto: 'Combinação correta!',
		classe: 'alert-success'
	},
	error: {
		texto: 'Combinação incorreta!',
		classe: 'alert-danger'
	},
}

class Tela {
	static obterCodigoHtml(item) {
		return `
			<div class="col-md-3">
				<div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
					<img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
				</div>
				<br /> 
			</div>
		`;
	}

	static configurarBotaoVerificarSelecao(funcaoOnClick) {
		window.verificarSelecao = funcaoOnClick
	}

	static alterarConteudoHTML(codigoHtml) {
		const conteudo = document.getElementById(ID_CONTEUDO)
		conteudo.innerHTML = codigoHtml
	}

	static gerarStringPelaImagem(itens) {
		// para cada item da lista, vai executar a função obterCodigoHtml
		// ao final, vai convatenar tudo em uma unica string
		// muda de Array para String
		return itens.map(Tela.obterCodigoHtml).join('');
	}

	static atualizarImagens(itens) {
		const codigoHtml = Tela.gerarStringPelaImagem(itens)
		Tela.alterarConteudoHTML(codigoHtml);
	}

	static configurarBotaoJogar(funcaoOnClick) {
		const btnJogar = document.getElementById(ID_BTN_JOGAR)
		btnJogar.onclick = funcaoOnClick;
	}

	static exibirHerois(nomeDoHeroi, img) {
		const elementosHtml = document.getElementsByName(nomeDoHeroi)
		// para cada elemento encontrado na tela vamos alterar a imagem
		// para a imagem inicial dele
		// com o forEach, para cada item dentro dos () setamos o valor 
		// de imagem
		elementosHtml.forEach(item => (item.src = img))
	}

	static async exibirMensagem(sucesso = true) {
		const elemento = document.getElementById(ID_MENSAGEM)
		if (sucesso) {
			elemento.classList.remove(MENSAGEM.error.classe)
			elemento.classList.add(MENSAGEM.sucesso.classe)
			elemento.innerText = MENSAGEM.sucesso.texto
		} else {
			elemento.classList.remove(MENSAGEM.sucesso.classe)
			elemento.classList.add(MENSAGEM.error.classe)
			elemento.innerText = MENSAGEM.error.texto
		}
		elemento.classList.remove(CLASSE_INVISIVEL)
		await util.timeout(1000);
		elemento.classList.add(CLASSE_INVISIVEL)
	}

	static exibirCarregando(mostrar = true) {
		const carregando = document.getElementById(ID_CARREGANDO)
		if (mostrar) {
			carregando.classList.remove(CLASSE_INVISIVEL);
			return;
		}
		carregando.classList.add(CLASSE_INVISIVEL);
	}
}