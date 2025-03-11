const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const inputListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo(){
  listaAmigos.push(inputAmigo.value);
  //?inputListaAmigos.innerHTML = inputListaAmigos.innerHTML + inputAmigo.value;
  inputListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
}

function sortearAmigo(){
  const random = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[random];
  ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}