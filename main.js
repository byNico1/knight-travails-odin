const board = []

for (let i = 0; i < 8; i++) {
    board[i] = []
    for (let j = 0; j < 8; j++) {
        board[i][j] = false
    }
}

function isMoveValid(start, end) {
    const dX = [2, 2, -2, -2, 1, 1, -1, -1 ]
    const dY = [1, -1, 1, -1, 2, -2, 2, -2]
    const parent = {
        [start]: null,
        [end]: null
    }

    const queue = [start]
    board[start[0]][start[1]] = true

    while (queue.length !== 0) {
        const [x, y] = queue.shift()

        for (let i = 0; i < dX.length; i++) {
            let newX = x + dX[i]
            let newY = y + dY[i]

            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8 && !board[newX][newY]) {
                queue.push([newX, newY])
                board[newX][newY] = true
                parent[[newX, newY]] = [x, y]; 

                if (board[end[0]][end[1]]) {
                    return parent
                }
            }
        }
    }
}


function knightMoves(start, end) {
    const moves = isMoveValid(start, end)
    const shortPath = []
    
    let currentPos = end
    while (currentPos !== null) {
        shortPath.push(currentPos)
        currentPos = moves[currentPos]
    }
    shortPath.reverse()
    const pathLen = shortPath.length - 1
    console.log(`You made it in ${pathLen} moves! here is your path:`);
    console.log(shortPath);
}

knightMoves([3, 3], [4, 3]);