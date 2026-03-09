'use strict'

// Funções de Banco de Dados
const lerBanco = () => JSON.parse(localStorage.getItem('db_produtos')) ?? []
const salvarBanco = (dados) => localStorage.setItem('db_produtos', JSON.stringify(dados))

// Função para deletar um item
const deletarItem = (index) => {
    const db = lerBanco();
    db.splice(index, 1)
    salvarBanco(db)
    atualizarTela()
}

const criarLinha = (produto, index) => {
    const corpoTabela = document.getElementById('corpoTabela')
    const tr = document.createElement('tr')
    tr.className = "hover:bg-slate-50 transition-colors border-b border-slate-100"

    // Coluna Código
    const tdCodigo = document.createElement('td')
    tdCodigo.className = "px-6 py-4 text-slate-500 font-mono text-sm"
    tdCodigo.textContent = produto.codigo

    // Coluna Nome
    const tdNome = document.createElement('td')
    tdNome.className = "px-6 py-4 text-slate-800 font-medium"
    tdNome.textContent = produto.nome

    // Coluna Quantidade
    const tdQuant = document.createElement('td')
    tdQuant.className = "px-4 py-3 text-center"
    const span = document.createElement('span')
    span.className = "bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold"
    span.textContent = produto.quantidade
    tdQuant.appendChild(span)

    // Botão Deletar
    const tdAcao = document.createElement('td')
    tdAcao.className = "px-6 py-4 text-center"
    const btnExcluir = document.createElement('button')
    btnExcluir.textContent = "Excluir"
    btnExcluir.className = "text-red-500 hover:text-red-700 font-semibold text-sm transition-colors cursor-pointer"
    btnExcluir.onclick = () => deletarItem(index) 
    
    tdAcao.appendChild(btnExcluir)

    tr.append(tdCodigo, tdNome, tdQuant, tdAcao)
    corpoTabela.appendChild(tr)
}

const limparTabela = () => {
    const corpoTabela = document.getElementById('corpoTabela')
    while (corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.lastChild)
    }
}

const atualizarTela = () => {
    limparTabela()
    const db = lerBanco()
    // O forEach agora passa o item e o seu índice (i)
    db.forEach((item, i) => criarLinha(item, i))
}

const adicionarProduto = () => {
    const inputNome = document.getElementById('produtoNome')
    const inputQuantidade = document.getElementById('quantidadeProduto')
    
    if (!inputNome.value.trim() || !inputQuantidade.value) {
        alert("Preencha todos os campos!")
        return
    }
    
    const novoProduto = {
        codigo: `#${Math.floor(Math.random() * 1000000)}`,
        nome: inputNome.value,
        quantidade: inputQuantidade.value
    }
    
    const db = lerBanco()
    db.push(novoProduto)
    salvarBanco(db) 
    
    atualizarTela()
    
    inputNome.value = ""
    inputQuantidade.value = ""
    inputNome.focus()
}

// Inicialização
atualizarTela()