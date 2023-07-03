class Leaderboard {
    constructor() {
        this.leaderBoard = [];
    }
    addScore(playerId, score) {
        let flag = false;

        for (let i =0; i < this.leaderBoard.length ; i++){ // this is O(n)
            if( this.leaderBoard[i][0] === playerId){
                this.leaderBoard[i] = score;
                flag = true;
            }
        }
        if ( !flag) {
            this.leaderBoard.push([playerId, score])
        }
        console.log(this.leaderBoard)
    }

    top(numTopPlayers) {  // this is )(n^2)
        let board = this.leaderBoard;
        let ans = 0;
        let i = 0;
        let k = 0;

        while (i < board.length - 1) {
            let j =0;
            while (j < board.length - i -1){
            if (board[j][1] < board[j + 1][1]) {
                let temp = board[j];
                board[j] = board[j + 1];
                board[j + 1] = temp;
            } 
                j++;
            }
            i++
        }
       
        while (k < numTopPlayers) {
            ans = ans + board[k][1];
           
            k++;
        }
       console.log(ans)
    }

    reset(playerId) {
        for (let i = 0; i < this.leaderBoard.length; i++) { // this is O(n)
            if (this.leaderBoard[i][0] === playerId) {
                this.leaderBoard.splice(i, 1);
                console.log(this.leaderBoard)
                return;
            }
        }
    }
}
console.time('top')
let leaderboard = new Leaderboard();
leaderboard.addScore(1, 73); // leaderboard = [[1,73]];
leaderboard.addScore(2, 56); // leaderboard = [[1,73],[2,56]];
leaderboard.addScore(3, 39); // leaderboard = [[1,73],[2,56],[3,39]];
leaderboard.addScore(4, 51); // leaderboard = [[1,73],[2,56],[3,39],[4,51]];
leaderboard.addScore(5, 4); // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];
leaderboard.top(1); // returns 73;
leaderboard.reset(1); // leaderboard = [[2,56],[3,39],[4,51],[5,4]];
leaderboard.reset(2); // leaderboard = [[3,39],[4,51],[5,4]];
leaderboard.addScore(2, 51); // leaderboard = [[2,51],[3,39],[4,51],[5,4]];
leaderboard.top(3); // returns 141 = 51 + 51 + 39;
console.timeEnd('top')

// time 6.169ms