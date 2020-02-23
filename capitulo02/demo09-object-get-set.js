const pessoa = {
	_nome: '',
	_idade: 20,
	get nome () {
		return this._nome;
	},
	set nome(valor) {
		this._nome = valor.toLocaleUpperCase()
	},
	get podeDirigir() {
		return this._idade >= 18;
	},
	set idade (valor) {
		this._idade = valor;
	}
}

pessoa.nome = "maria do céu";
console.log('nome:',pessoa.nome);

pessoa.idade = 17;
console.log('Pode dirigir:', pessoa.podeDirigir);

