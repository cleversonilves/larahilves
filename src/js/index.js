const botoes = document.querySelectorAll(".botao");
const foto = document.querySelectorAll(".foto");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarFoto();

		botao.classList.add("selecionado");
		foto[indice].classList.add("selecionado");
	});
});

function desselecionarFoto() {
	const fotoSelecionado = document.querySelector(".foto.selecionado");
	fotoSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}