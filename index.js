const elementoNome = document.getElementById("nome");
const elementoSituacao = document.querySelector("#situacao");
const elementoImg = document.querySelector("#imagem");
let elementoBtn = document.querySelector("#alterar");

elementoBtn.addEventListener("click", () => {
  if (elementoBtn.value == "primeiro") {
    elementoImg.src = "coringa222.jpg";
    elementoSituacao.innerText = " Modo Metamorfose (Confuso) ";
    elementoBtn.value = "segundo";
} else if (elementoBtn.value == "segundo") {
    elementoImg.src = "felicidade.jpg";
    elementoSituacao.innerText = "Nacizista ao quadrado";
    elementoBtn.value = "terceiro";
} else if (elementoBtn.value == "terceiro") {
    elementoImg.src = "feliz.jpg";
    elementoSituacao.innerText = "Fugi do Hospital Psiquiátrico";
    elementoBtn.value = "quarto";
  } else if (elementoBtn.value == "quarto") {
    elementoImg.src = "medo.jpg";
    elementoSituacao.innerText = "Dissociação";
    elementoBtn.value = "quinto";
  } else if (elementoBtn.value == "quinto") {
    elementoImg.src = "reflexivo.jpg";
    elementoSituacao.innerText = "Pensando na vida";
    elementoBtn.value = "sexto";
  }
  else {
    elementoImg.src = "desconfiado.jpg";
    elementoSituacao.innerText = "Desconfiando de tudo";
    elementoBtn.value = "primeiro";
  }
});