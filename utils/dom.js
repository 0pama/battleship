import { initGame } from "./GameController.js"
import { randomNumber, winningBot } from "./helperfuncs.js"
import { playSoundEffect } from "./playSound.js"

// const app = document.getElementById('app')
const userBoard = document.getElementById('userBoard')
const enemyBoard = document.getElementById('enemyBoard')
// const userSide = document.getElementById('userSide')
// const enemySide = document.getElementById('enemySide')
const endGame = document.getElementById('endGame')
const statusText = document.getElementById('status-text')
        statusText.innerText = 'game started' 




function enableBotTurn() {
    userBoard.classList.add("disabled-board");     
    enemyBoard.classList.add("disabled-board");
}
function enableHumanTurn() {
    userBoard.classList.add("disabled-board");   
    enemyBoard.classList.remove("disabled-board"); 
}



const [player1, player2] = initGame()
function startGame(player) {
    for (let i = 0; i < player.board.board.length; i++) {
        const div = document.createElement('div')
        let isThereAboat = ''
        if (player.board.board[i] !== true && player.board.board[i] !== false && (player.type === 'human')) {
            isThereAboat = 'boat'
        }
        div.className = `grid box ${isThereAboat} id${i}`
        if (player.type === 'human') {

            userBoard.appendChild(div)
        } else if (player.type === 'bot') {

            enemyBoard.appendChild(div)
        }
        div.addEventListener('click', (e) => {
            e.preventDefault()
            handleShotat(player, e, i)
        })

    }
}

startGame(player1)
startGame(player2)
let turn = 'human'
function handleShotat(player, e, i) {
    const board = player.board
    // console.log(board)
    if (turn === 'bot' && player.type === 'human') {

        statusText.innerText = 'enemy turn' 

        playSoundEffect('fire')

        turn = 'human'
        let attack = board.recieveAttack(i)
        let checkWinstr = checkWin(player1, player2)
        handleWin(checkWinstr)

        setTimeout(() => {
            if (attack) {




                    e.target.className = 'missedShot not-allowed'


        statusText.innerText = 'enemy shot hit your ship' 
                    playSoundEffect('hit')
            } else {
        statusText.innerText = 'enemy missed' 

                e.target.className = 'hitShot not-allowed'
                playSoundEffect('miss')
            }


        setTimeout(() =>  enableHumanTurn(),3000)
        }, 2000)
    }


    if (turn === 'human' && player.type === 'bot') {

        statusText.innerText = 'your turn' 
        playSoundEffect('fire')

        turn = 'bot'
        let attack = board.recieveAttack(i)
        let checkWinstr = checkWin(player1, player2)

        handleWin(checkWinstr)
        console.log(checkWinstr)
        if (attack) {


            setTimeout(() => {

                e.target.className = 'hitShot not-allowed'
                playSoundEffect('hit')

        statusText.innerText = 'your shot hit a target' 
            }, 2000)

        } else {

            setTimeout(() => {

                e.target.className = 'missedShot not-allowed'


        statusText.innerText = 'you missed' 
                playSoundEffect('miss')
            }, 2000)

        }
        const w = winningBot()
        const d = randomNumber(100)
        console.log(w)
        console.log(d)
        let id = Math.max(w,d)
        console.log('here this friendly id ', id.toString())

        let friendly = document.querySelector(`.id${id}`)
        console.log('here this friendly', friendly)
        if(!friendly) {
        friendly = randomNumber(100)
        }
        if (friendly) {



            turn = 'bot'
            enableBotTurn()
            setTimeout(() => {

                friendly.click()

                turn = 'human'
            }, 7000)


        } else {
            turn = 'human'
        }

    }



}


function checkWin(player1, player2) {
    const board1 = player1.board.board.filter(x => x !== true && x !== false)
    const board2 = player2.board.board.filter(x => x !== true && x !== false)
    const ships1 = board1.filter(x => !x.isSunk())
    const ships2 = board2.filter(x => !x.isSunk())
    let winner = ''
    if (ships1.length !== board1.length) {
        winner = `${player2.type} wins`
        return winner

    }
    if (ships2.length !== board2.length) {


        winner = `${player1.type} wins`
        return winner
    }
    return false
}

function handleWin(winstr) {

    if (winstr) {
        enemyBoard.innerHTML = ''
        userBoard.innerHTML = ''
        statusText.innerText = winstr

    }
} 
