# 📦 Sistema de Controle de Inventário

Um gerenciador de produtos leve, moderno e seguro, desenvolvido com **JavaScript** e estilizado com **Tailwind CSS**. O sistema permite adicionar e remover produtos, mantendo os dados salvos localmente no navegador.

![Preview](.img/print.png)

## 🚀 Funcionalidades

* **Persistência de Dados**: Utiliza `localStorage` para manter seus produtos salvos mesmo após fechar o navegador.
* **Segurança contra XSS**: Manipulação do DOM via `textContent` para evitar a execução de scripts maliciosos.
* **Interface Responsiva**: Design limpo e adaptável feito com Tailwind CSS 4.0.
* **Geração Automática**: Cria códigos de identificação aleatórios para cada produto.
* **CRUD (Create, Read, Delete)**: Fluxo completo de adição, listagem e remoção de itens.

## 🛠️ Tecnologias Utilizadas

* [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) - Estrutura.
* [Tailwind CSS](https://tailwindcss.com/) - Estilização via CDN.
* [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Lógica e manipulação de JSON.

## 📋 Como funciona o Armazenamento?

O projeto utiliza o formato **JSON** para organizar os dados dentro do `localStorage`. 

1.  **Leitura**: O sistema busca a string sob a chave `db_produtos`.
2.  **Conversão**: O texto é convertido em um Array de objetos via `JSON.parse()`.
3.  **Escrita**: Ao adicionar ou remover, o Array é convertido de volta para string via `JSON.stringify()`.



## 📥 Instalação e Uso

1.  Clone este repositório ou baixe os arquivos.
2.  Certifique-se de que os arquivos `index.html` e `main.js` estejam na mesma pasta.
3.  Abra o arquivo `index.html` em qualquer navegador moderno.

## 📂 Estrutura de Arquivos

```text
├── index.html   # Estrutura da página e chamada do Tailwind
└── main.js      # Lógica do banco de dados e manipulação do DOM
```

## Autor
[Jean Costa](<https://www.linkedin.com/in/jean090504/>)