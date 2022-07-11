function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x
        && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width
        && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y
        && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )

}


function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if (player.health === enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Empate!'
        player.switchSprite('death')
        enemy.switchSprite('death')
    } else if (player.health > enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Jogador 1 Venceu!'
        enemy.switchSprite('death')
    } else {
        document.querySelector('#displayText').innerHTML = 'Jogador 2 Venceu!'
        player.switchSprite('death')
    }
}

let endTime = 0
let timer = 5
let timerId


/* ORIGINAL: */
function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
    } else if (timer === 0) {
        determineWinner({ player, enemy, timerId })
    }
}



/*
function decreaseTimer() {
    if (timer + endTime > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--
        console.log(timer + endTime)
        document.querySelector('#timer').innerHTML = timer + endTime
    } else if (timer + endTime === 0 && endTime === 0) {
        endTime = 6
        console.log(endTime)
        determineWinner({ player, enemy, timerId })
        decreaseTimer()
    } else if(timer + endTime === 0 && endTime > 0){
        clearTimeout(timerId)
        console.log('Fim de Jogo!')
        //window.location.reload()
    }
}
*/