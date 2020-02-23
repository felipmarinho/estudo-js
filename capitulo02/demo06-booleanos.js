/**
 * Valores false
 * false, -, [], "", '', null, undefined
 */

 /**
	* valores true
	* true, 1, -1, 0.5, "0"
  */

const podeDirigir = true
if (podeDirigir) {
	console.log('Ela pode dirigir.');
}

const saldoEmConta = 0
if (!saldoEmConta) {
	console.log('Não tem saldo!');
}

const boolComString = 'ae Felipe';
// força o valor a true ou false
// de acordo com a tabela
console.log(!!boolComString);

// negação
console.log('negação', !boolComString);

// negação + forçar a bool
console.log(
	'! (!!boolComString)',
	! (!!boolComString)
);
