const minhaLista = [];
const minhaListaDeTarefas = [
	'mandar email',
	'colocar comida para o dog',
	'limpar o quarto',
];

console.log(minhaListaDeTarefas[0]); // mandar email
console.log(minhaListaDeTarefas[1]); // colocar comida para o dog
console.log(minhaListaDeTarefas[4]); // undefined

// quantidade de itens no array;
console.log('qnt de itens:', minhaListaDeTarefas.length);

// adicionar item
minhaListaDeTarefas.push('formatar computador') // adiciona um item no final da lista.

// console.log('array:', minhaListaDeTarefas);

// remover ULTIMO item da lista
// const ultimo = minhaListaDeTarefas.pop();
// console.log(ultimo, minhaListaDeTarefas);

// remover o PRIMEIRO item da lista
// const primeiro = minhaListaDeTarefas.shift();
// console.log(primeiro, minhaListaDeTarefas);


// console.log(minhaListaDeTarefas);
// remover um item especifico a partir de um indice
// console.log(minhaListaDeTarefas[2]);
// splice(indice do item, qnts remover apartir do indice informado)
// minhaListaDeTarefas.splice(2, 1);
// console.log(minhaListaDeTarefas);

const itens  = [
	1, 'computador', 0.22
]

// verifica o tipo do array
console.log(typeof(itens));

// verificar se é array da forma correta
console.log(Array.isArray(itens));

// Ordena os arrays por um elemento com .sort()
// const numeros = [3, 2, 0, 1];
// console.log('numeros', numeros);
// console.log('numeros.sort()', numeros.sort());

// const textos = ['d', 'a', 'b', 'c'];
// console.log('textos', textos);
// console.log('textos.sort()', textos.sort());

// juntar dois arrays
// const novo = itens.concat([1, 2, 3])
// console.log(novo);

// juntar arrays em uma string
// console.log(itens.join(', '));

// verificar indice do item, caso o item não exista, return -1 se não retornará o indice.
const index = itens.indexOf('computador');
console.log(itens[index]);
