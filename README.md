# SistemaSimples
Aqui está um README para GitHub, feito para ser acolhedor, claro e fácil de entender — como se estivesse guiando alguém do zero, sem perder a parte técnica 👇

---

# 🌐 Sistema Simples com JSON + JavaScript

Bem-vindo(a) ao meu projeto! 🚀
Este é um sistema simples feito com **HTML, CSS e JavaScript puro**, que simula o consumo de dados de uma API utilizando arquivos `.json`.

Aqui você encontra uma pequena “mini plataforma” que exibe:

* 🧑‍🎓 Lista de alunos
* 🛒 Produtos de uma loja virtual
* 🎬 Catálogo de filmes

Tudo isso carregado dinamicamente com `fetch()`.

---

# ✨ Objetivo do Projeto

Este projeto foi criado para praticar:

* Consumo de arquivos JSON com JavaScript
* Uso de `fetch()` e `async/await`
* Manipulação do DOM
* Renderização dinâmica de dados
* Organização de código front-end
* Separação de responsabilidades (HTML, CSS e JS)

---

# 🧠 O que você vai encontrar aqui

## 🧑‍🎓 Alunos

Os dados dos alunos são carregados de um arquivo `aluno.json`.

📌 Cada aluno possui:

* Nome
* Idade
* Curso
* Cidade
* Email

✔️ A renderização acontece dinamicamente ao clicar no botão **“Carregar JSON”**.

---

## 🛒 Produtos

Os produtos são carregados de `produtos.json`.

📌 Cada produto possui:

* Nome
* Preço
* Categoria
* Estoque

✔️ Eles são exibidos automaticamente quando a página carrega.

💡 Layout em formato de cards, deixando tudo mais visual e organizado.

---

## 🎬 Filmes

Os filmes vêm do arquivo `filmes.json`.

📌 Cada filme possui:

* Nome
* Nota
* Gênero

✔️ Eles aparecem quando o usuário clica no botão **“Mostrar Filmes”**.

---

# ⚙️ Como o projeto funciona

A lógica principal acontece no JavaScript:

### 🔄 1. Carregamento de dados

Utilizamos `fetch()` para buscar os arquivos JSON locais.

### 🎯 2. Renderização dinâmica

Os dados são convertidos em HTML usando:

* `forEach()`
* `innerHTML`
* `createElement()`

### 🎮 3. Interatividade

Eventos como:

* `onclick`
* `addEventListener("click")`

Permitem interação com o usuário.

---

# 📁 Estrutura do projeto

```
📦 projeto
├── index.html
├── script.js
├── produtos.css
├── aluno.json
├── filmes.json
└── produtos.json
```

---

# 💡 Destaques do código

✔ Consumo de múltiplos JSONs
✔ Uso de async/await e Promises
✔ Manipulação do DOM
✔ Separação de dados e interface
✔ Interface simples e funcional

---

# 🚀 Como executar o projeto

1. Baixe ou clone este repositório
2. Abra o arquivo `index.html` no navegador
3. Clique nos botões e veja os dados sendo carregados!

⚠️ Importante: use uma extensão como **Live Server** no VS Code para evitar problemas com `fetch()` em arquivos locais.

---

# 📚 Aprendizados

Este projeto ajuda a entender como aplicações reais funcionam por trás dos panos:

👉 APIs são basicamente JSONs reais
👉 Front-end consome dados e renderiza telas
👉 Tudo é dinâmico, não estático

---

# 🤝 Contribuição

Sinta-se à vontade para:

* Melhorar o layout 🎨
* Adicionar filtros 🔎
* Criar busca de alunos ou produtos
* Transformar em React depois 🚀

---

# 🧡 Fechamento

Esse projeto é um ótimo passo para quem está aprendendo JavaScript e quer entender como dados “ganham vida” na tela.

Se você chegou até aqui: continue praticando — você está indo muito bem! 🚀
