const heroi = {
	nome: 'Flash',
	idade: 100,
	sexo: 'Masculino'
}

// console.log('nome', heroi.nome);
// console.log('idade', heroi['idade']);
// console.log('sexo', heroi.sexo);
// console.log('naoExiste', heroi.naoExiste);

heroi.id = 0001 // podemos alterar as informções internas do objeto pois estamos alterando sua instancia e não reassinando o objeto.
// console.log('heroi', heroi);

// Exibir as chaves
// console.log('Chaves', Object.keys(heroi));

// Exibir valores
// console.log('valores', Object.values(heroi));


// juntar dois objetos
const pessoa = {
	tamanho: '10 metros',
}
const novoObj = Object.assign(heroi, pessoa)

console.log('novoObj', novoObj);

// para remover um atributo de um objeto usamos o delete
delete novoObj.nome;
console.log('novoObj - delete', novoObj);