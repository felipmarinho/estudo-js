class Heroi {
	atacar() {
		console.log(`Atacou!`);
	}
	defender() {
		console.log(`defendeu!`);
	}
}

const heroi = new Heroi()
heroi.atacar();
heroi.defender();

class Heroi2 {
	constructor(nome, idade) {
		this.nome = nome
		this.idade = idade
	}
	atacar() {
		console.log(`A(O) ${this.nome} tacou!`);
	}
	defender() {
		console.log(`defendeu!`);
	}
}

const heroi2 = new Heroi2(`Capitã Marvel`, 200);
heroi2.atacar()

class Heroi3 {
	static obterAnoNascimento(idade) {
		return 2020 - idade
	}
}

const anoNascimento = Heroi3.obterAnoNascimento(1986);
console.log(`Ano de nascimento do Heroi é: ${anoNascimento}`);
