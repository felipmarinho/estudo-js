const textoPar = "par";
const textoImpar = "impar"
for (let index = 0; index <= 10; index++) {
	const decisao = index % 2 === 0 ? textoPar : textoImpar;
	console.log(`O número ${index} é ${decisao}`);
}

const minhaListaDeHerois = [
	{
		id: parseInt(Math.random() * 10),
		nome: 'Zezinho',
		poder: 'velocidade'
	},
	{
		id: Math.random(),
		nome: 'Mariazinho',
		poder: 'Super força'
	}
]

console.log(minhaListaDeHerois);

for (let index = 0; index < minhaListaDeHerois.length; index++) {
	const item = minhaListaDeHerois[index];
	console.log(
		`
			id: ${item.id}
			nome: ${item.nome}
		`
	);
	
}

// Não precisa do contador
for (const index in minhaListaDeHerois) {
	const item = minhaListaDeHerois[index]
	console.log('Nome:', item.nome);
}

// Não precisa usar index
for (const item of minhaListaDeHerois) {
	console.log('Nome**:', item.nome);
}