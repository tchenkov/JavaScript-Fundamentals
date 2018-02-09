function expedition(maze, cipher, cipherApplyTo, startingPoint) {
    for (let [row, col] of cipherApplyTo) {

        for (let i = 0, iMaze = row; i < cipher.length; i++, iMaze++) {
            for (let j = 0, jMaze = col; j < cipher[i].length; j++, jMaze++) {
                if (iMaze < 0 || jMaze < 0 || iMaze >= maze.length || jMaze >= maze[iMaze].length) {
                    continue;
                }

                maze[iMaze][jMaze] = (maze[iMaze][jMaze] + cipher[i][j]) % 2;
            }
        }
    }

    let [myX, myY] = startingPoint;
    let steps = 0;

    while (maze[myX][myY] === 0) {
        steps++;
        if (myX - 1 >= 0 && maze[myX - 1][myY] === 0) {
            maze[myX][myY] = 1;
            myX--;
            continue;
        }
        if (myY - 1 >= 0 && maze[myX][myY - 1] === 0) {
            maze[myX][myY] = 1;
            myY--;
            continue;
        }
        if (myY + 1 < maze[myX].length && maze[myX][myY + 1] === 0) {
            maze[myX][myY] = 1;
            myY++;
            continue;
        }
        if (myX + 1 < maze.length && maze[myX + 1][myY] === 0) {
            maze[myX][myY] = 1;
            myX++;
            continue;
        }

        break;
    }

    console.log(steps);

    function getQuadrant(myX, myY, maze) {
        if (myX < maze.length / 2) {
            // top
            if (myY < maze[myY].length / 2) {
                // left
                return 2;
            } else {
                // right
                return 1;
            }
        } else {
            // bottom
            if (myY < maze[myY].length / 2) {
                // left
                return 3;
            } else {
                // right
                return 4;
            }
        }
    }

    if (myX === startingPoint[0] && myY === startingPoint[1]) {
        let quadrant = getQuadrant(myX, myY, maze);
        console.log(`Dead end ${quadrant}`);
    } else if (myX === 0/* && myY !== startingPoint[1]*/) {
        console.log('Top');
    } else if (myY === 0/* && myX !== startingPoint[0]*/) {
        console.log('Left');
    } else if (myX === maze.length - 1) {
        console.log('Bottom');
    } else if (myY === maze[myX].length) {
        console.log('Right');
    } else {
        let quadrant = getQuadrant(myX, myY, maze);
        console.log(`Dead end ${quadrant}`);
    }
}

// function tests
expedition(
    [
        [1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]
    ],
    [
        [1, 1],
        [2, 3],
        [5, 3]
    ],
    [0, 2]);
console.log();
expedition(
    [
        [1, 1, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [1, 0, 1, 0]
    ],
    [
        [0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1]
    ],
    [
        [0, 0],
        [2, 1],
        [1, 0]
    ],
    [2, 0]);
console.log();
expedition([
        [0, 0, 1, 0, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 0, 1],
        [0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
        [0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 1, 1, 1, 0, 0]
    ],
    [
        [1, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0],
        [1, 1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1, 1]
    ],
    [
        [0, 0],
        [1, 1],
        [5, 4],
        [7, 1]
    ],
    [8, 9]
)
;