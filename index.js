let isOturn = false
const winComb = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
let Oscore = 0
let Xscore = 0
let cnt = 0

// 게임 init(restart 아님)
const initGame = () => {
    cnt = 0
    items.forEach(e => {
        e.classList.remove('X')
        e.classList.remove('O')
    })
}

// html에 점수 업데이트
const updateScore = () => {
    scoreO.innerHTML = Oscore
    scoreX.innerHTML = Xscore
}

// new game, reset game 구현
const initButtons = () => {
    let newGame = document.getElementById('newGame')
    let resetGame = document.getElementById('resetGame')

    newGame.addEventListener("click", () => {
        console.log('new game')
        initGame()
    })

    resetGame.addEventListener("click", () => {
        console.log('reset game')
        Xscore = 0
        Oscore = 0
        updateScore()
        initGame()
    })
}

// cell item 클릭했을 때 실행 할 함수
const clickFunction = () => {
    // 이미 그려진 자리면 아무 것도 하지 않기
    if (e.classList.contains('O') || e.classList.contains('X')) {
        return
    }

    // O 또는 X item에 css로 그리기
    if (isOturn) {
        e.classList.add('O')
    } else {
        e.classList.add('X')
    }
    cnt++

    // 경기 현황 체크
    if (cnt >= 9) { // 무승부
        setTimeout(() => {
            alert('무승부입니다.')
            initGame()
        }, 0)
        return
    }

    let winner = null
    for (let i = 0; i < winComb.length; i++) {
        // X 승리
        if (items[winComb[i][0]].classList.contains('X') &&
            items[winComb[i][1]].classList.contains('X') &&
            items[winComb[i][2]].classList.contains('X')
        ) {
            winner = 'X'
            break
        }

        // O 승리
        else if (items[winComb[i][0]].classList.contains('O') &&
            items[winComb[i][1]].classList.contains('O') &&
            items[winComb[i][2]].classList.contains('O')
        ) {
            winner = 'O'
            break
        }
    }

    // 승리 alert창 띄우기, 게임 재시작
    if (winner) {
        setTimeout(() => {
            alert(winner + '의 승리입니다.')
            if (winner === 'X') {
                Xscore++
                updateScore()
            } else {
                Oscore++
                updateScore()
            }

            initGame()
        }, 0)
        return
    }

    // 순서 바꾸기
    isOturn = !isOturn

    // 순서 화면에 그리기
    let turn = document.getElementById('turn')
    turn.innerHTML = isOturn ? 'O' : 'X'
}


const items = document.querySelectorAll('.item')

let scoreX = document.getElementById('scoreX')
let scoreO = document.getElementById('scoreO')
updateScore()
initButtons()

items.forEach(e => e.addEventListener('click', clickFunction()))