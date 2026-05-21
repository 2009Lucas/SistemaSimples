// ==========================
// ALUNOS
// ==========================
async function carregarDados() {
  try {
    const resposta = await fetch("aluno.json");
    const alunos = await resposta.json();

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    alunos.forEach(aluno => {
      lista.innerHTML += `
        <div class="card">
          <h3>${aluno.nome}</h3>
          <p>Idade: ${aluno.idade}</p>
          <p>Curso: ${aluno.curso}</p>
          <p>Cidade: ${aluno.cidade}</p>
          <p>Email: ${aluno.email}</p>
        </div>
      `;
    });

  } catch (erro) {
    console.error("Erro ao carregar alunos:", erro);
  }
}


// ==========================
// FILMES
// ==========================
function carregarFilmes() {
  fetch("filmes.json")
    .then(res => res.json())
    .then(filmes => {
      const lista = document.getElementById("listaFilmes");
      lista.innerHTML = "";

      filmes.forEach(filme => {
        lista.innerHTML += `
          <div class="filme">
            <h3>${filme.nome}</h3>
            <p>Nota: ${filme.nota}</p>
            <p>Gênero: ${filme.genero}</p>
          </div>
        `;
      });
    })
    .catch(err => console.error("Erro filmes:", err));
}


// ==========================
// PRODUTOS
// ==========================
async function carregarProdutos() {
  try {
    const resposta = await fetch("produtos.json");
    const produtos = await resposta.json();

    const container = document.getElementById("produtos-container");
    container.innerHTML = "";

    produtos.forEach(produto => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <div class="nome">${produto.nome}</div>
        <div class="preco">R$ ${produto.preco.toFixed(2)}</div>
        <div class="estoque">Estoque: ${produto.estoque}</div>
      `;

      container.appendChild(card);
    });

  } catch (erro) {
    console.error("Erro produtos:", erro);
  }
}


// ==========================
// EVENTOS
// ==========================
const botao = document.getElementById("btnMostrar");

if (botao) {
  botao.addEventListener("click", carregarFilmes);
}


// ==========================
// INICIALIZAÇÃO
// ==========================
carregarDados();
carregarProdutos();