'use strict'

const imagens = [
    { url: './img/imagem1.jpg', nome: 'Imagem 1' },
    { url: './img/imagem2.jpg', nome: 'Imagem 2' },
    { url: './img/imagem3.jpg', nome: 'Imagem 3' },
    { url: './img/imagem4.jpg', nome: 'Imagem 4' },
    { url: './img/imagem5.jpg', nome: 'Imagem 5' },
    { url: './img/imagem6.jpg', nome: 'Imagem 6' },
]

function criarImagens(imagem){
    const galeria = document.getElementById('galeria')
    
    const figura = document.createElement('figure')
    
    const img = document.createElement('img')
    img.src = imagem.url
    
    const legenda = document.createElement('figcaption')
    legenda.textContent = imagem.nome
    
    figura.appendChild(img)
    figura.appendChild(legenda)
    galeria.appendChild(figura)
}


function carregarImagens(){
    imagens.forEach(criarImagens)

}

carregarImagens()
