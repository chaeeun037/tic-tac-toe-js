const winComb = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
let isOturn = false
let Oscore = 0
let Xscore = 0
let cnt = 0

// 게임 init (점수 초기화 아님)
const initGame = (isOturn) => {
    updateTurn(isOturn === true)
    cnt = 0
    items.forEach(e => {
        e.classList.remove('X')
        e.classList.remove('O')
    })
}

// html에 점수 업데이트
const updateScore = (Oscore, Xscore) => {
    scoreO.innerHTML = Oscore
    scoreX.innerHTML = Xscore
}

// html에 차례 업데이트
const updateTurn = (isOturn) => {
    turn.innerHTML = isOturn ? 'O' : 'X'
}

// new game, reset game 구현
const initButtons = () => {
    let newGame = document.getElementById('newGame')
    let resetGame = document.getElementById('resetGame')

    newGame.addEventListener("click", () => {
        let isRestart = confirm('게임을 새로 시작하시겠습니까?')
        if (isRestart) {
            initGame(isOturn)
        }
    })

    resetGame.addEventListener("click", () => {
        let isReset = confirm('점수를 초기화 하시겠습니까?')
        if (isReset) {
            Xscore = 0
            Oscore = 0
            updateScore(Xscore, Oscore)
            initGame(false)
        }
    })
}

// cell item 클릭했을 때 실행 할 함수
const clickFunction = (e) => {
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
            initGame(isOturn)
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
                updateScore(Oscore, ++Xscore)
            } else {
                updateScore(++Oscore, Xscore)
            }

            // 진 사람이 먼저 시작하기
            isOturn = winner === 'O' ? false : true
            initGame(isOturn)
        }, 0)
        return
    }

    // 순서 바꾸고 화면에 그리기
    isOturn = !isOturn
    updateTurn(isOturn)
}

let scoreX = document.getElementById('scoreX')
let scoreO = document.getElementById('scoreO')
updateScore(Oscore, Xscore)

let turn = document.getElementById('turn')
updateTurn(isOturn)

const items = document.querySelectorAll('.item')
items.forEach(e => e.addEventListener('click', () => clickFunction(e)))

initButtons()