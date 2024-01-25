let listaDeNumerosSorteados =[];
let nMaximosNaLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// função de acessar o doc html
function exibirNaTela(tag, texto) {
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
}

function formarSaudacao() {
	exibirNaTela('h1', 'Jogo do número secreto');
	exibirNaTela('p', 'Escolha um número entre 1 e 10');
}

formarSaudacao();

// função de gerar numero aleatorio
function gerarNumeroAleatorio() {
	let numeroEscolhido = parseInt(Math.random() * nMaximosNaLista + 1);
	let quantidadesDeElementosNaLista = listaDeNumerosSorteados.length;

	if (quantidadesDeElementosNaLista === nMaximosNaLista) {
		listaDeNumerosSorteados = []
	}

	if (listaDeNumerosSorteados.includes(numeroEscolhido)){
		return gerarNumeroAleatorio();
	} else {
		listaDeNumerosSorteados.push(numeroEscolhido);
		console.log(listaDeNumerosSorteados);
		return numeroEscolhido; 
	}
}
// função de limpar campos
function limparCampo() {
	let chute = document.querySelector('input');
	chute.value = '';
}

// função de verificarChute() e contar número de tentativas
function verificarChute() {
	let chute = document.querySelector('input').value;

	if (chute == numeroSecreto) {
		exibirNaTela('h1', 'Acertou')
		let palavraTentativa = tentativas <= 1 ? 'tentativa': 'tentativas';
		let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
		exibirNaTela('p', mensagem);
		document.getElementById('reiniciar').removeAttribute('disabled');
	} else  {
		if (chute < numeroSecreto) {
			exibirNaTela('p', 'O número secreto é maior');
		} else {
			exibirNaTela('p', 'O número secreto é menor');
		}
		tentativas++;
		limparCampo();
	}
}

function reiniciarJogo() {
	numeroSecreto = gerarNumeroAleatorio();
	tentativas = 1;
	limparCampo();
	formarSaudacao();
	document.getElementById('reiniciar').setAttribute('disabled', true);
}