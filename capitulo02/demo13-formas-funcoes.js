function minhaFuncao1(parametro1) {
	return 'minhaFuncao1'
}

const minhaFuncao2 = function (parametro1) {
	return `minhaFuncao2 ${parametro1}`
}

const minhaFuncao3 = (parametro1) => {
	return `minhaFuncao3 ${parametro1}`
}

const minhaFuncao4 = parametro1 => `aeee ${parametro1}`;

const obj1 = {
	minhaFuncao: parametro1 => `aee ${parametro1}`
}

obj1.minhaFuncao('test')

const obj2 = {
	minhaFuncao (parametro1) {
		return `aee ${parametro1}`
	}
}