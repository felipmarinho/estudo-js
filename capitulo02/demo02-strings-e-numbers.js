let salarioDoAmigo = 1000;
let meuSalario = '2999'

console.log(salarioDoAmigo + meuSalario);
// Ao somar string + number ou vice e versa o resultado é uma string juntando os dois valores.

console.log('salarioDoAmigo', typeof(salarioDoAmigo), salarioDoAmigo);
console.log('meuSalario', typeof(meuSalario), meuSalario);

let meuSalarioCorrigido = Number(meuSalario);
console.log('Novo:', salarioDoAmigo + meuSalarioCorrigido);
console.log('salarioDoAmigo', typeof(salarioDoAmigo), salarioDoAmigo);
console.log('meuSalarioCorrigido', typeof(meuSalarioCorrigido), meuSalarioCorrigido);

// NaN = Not a Number
console.log('meusalario isNaN:',
	isNaN(meuSalario)
);
console.log('meuSalarioCorrigido isNaN:',
	isNaN(meuSalarioCorrigido)
);

let minhaString = 'Olá mundo!';
let minhaOutraString = "Olá mundo2";
let minhaStringComVariaveis = `${minhaString} - ${minhaOutraString} | entendeu?`;
console.log(minhaStringComVariaveis);
