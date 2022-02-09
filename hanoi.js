const gameArea = document.querySelector(".game") //selecionando o html

let torresArray = []

let posicaoPadrao = []

let discoSelecionado = 0


function torreCompleta() {
    for (let i = 1; i <= 3; i++) {
        let torres = document.createElement("div")
        torres.classList.add(`torre${i}`)
        if (i === 1) {

            for (let j = 1; j <= 4; j++) {
                let disco = document.createElement('div')
                disco.classList.add(`disco${j}`)
                torres.appendChild(disco)
                posicaoPadrao.push(disco)

            }
        }


        torres.addEventListener('click', pegaDisco)
        gameArea.appendChild(torres)
        torresArray.push(torres)


    }
}
torreCompleta()

function pegaDisco(event) {
    discoSelecionado = event.currentTarget.lastChild
    for (let i = 0; i < torresArray.length; i++) {
        torresArray[i].removeEventListener('click', pegaDisco)

        torresArray[i].addEventListener('click', moverDisco)
    }
}

function moverDisco(event) {

    for (let i = 0; i < torresArray.length; i++) {
        torresArray[i].addEventListener('click', pegaDisco)

        torresArray[i].removeEventListener('click', moverDisco)
    }

        if(event.currentTarget.childNodes.length === 0 || discoSelecionado.offsetWidth < event.currentTarget.lastChild.offsetWidth){
            event.currentTarget.appendChild(discoSelecionado)
        }
        else if(discoSelecionado.offsetWidth > event.currentTarget.lastChild.offsetWidth){
            alert('Não pode colocar um disco maior sobre um disco menor!')
        }
            if(torresArray[2].childNodes.length === 4 ){
                alert('Parabéns!! Você venceu!!')
            }
}





