let mostrar = document.querySelector('#mostrar')
let botao = document.querySelector('#botao')
let copiar = document.querySelector('#copiar')

copiar.addEventListener('click', copy)
botao.addEventListener('click', mudar)

let frases = ['"O melhor momento para começar foi ontem, o segundo melhor é hoje" - O Globo.','"O sucesso é constância, não sorte" - O Globo.', '"Você tem que acordar cada manhã com determinação se você pretende ir para a cama com satisfação" - Pensador.', '"Nada muda se você não mudar" - O Globo.','"Quando cansar, descanse, recupere energias e siga!" - Pensador.', '"Todos os dias são uma oportunidade para recomeçar e para planejar um novo caminho. Siga com fé e acredite em você." - Pensador', '"A coragem está um passo à frente do medo." - Coleman Young', '"Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos." - Friedrich Nietzsche', '"A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo." - Scott Fitzgerald', '"Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível." - São Francisco de Assis', '"A força não provém da capacidade física. Provém de uma vontade indomável." - Mahatma Gandhi', '"Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você." - Cynthia Kersey', '"A única forma de chegar ao impossível é acreditar que é possível." - Alice no País das Maravilhas', '"Você precisa fazer aquilo que pensa que não é capaz de fazer". - Eleanor Roosevelt', '"A paz vem de dentro de você mesmo. Não a procure à sua volta." - Buda' ]

let ultimafrase = -1

function mudar() {

    // evita loop infinito quando há apenas uma frase
    if (frases.length === 1) {
        mostrar.textContent = frases[0]
        return // encerra a função aqui
    }

    let indice // variável que armazenará o índice sorteado

    // gera um novo índice até que seja diferente da última frase exibida
    do {
        indice = Math.floor(Math.random() * frases.length)
    } while(indice === ultimafrase)

        ultimafrase = indice // atualiza o último índice usado
        mostrar.style.opacity = 0

        setTimeout(function(){
            mostrar.textContent = frases[indice] // exibe a nova frase
            mostrar.style.opacity = 1
        }, 200)
        

}

mudar() // executa uma vez ao carregar a página para não iniciar vazio

function copy() {

    let copfrase = mostrar.textContent // pega o texto atual exibido na tela

    navigator.clipboard.writeText(copfrase) // copia o texto para a área de transferência

    let imagem = copiar.querySelector('img') // pega a imagem que está dentro do botão copiar

    imagem.src = "check.png"  // troca a imagem para indicar que foi copiado

    // após 650 milissegundos, volta para a imagem original
    setTimeout (function() {
        imagem.src = "copy.png"
    }, 650)
}

