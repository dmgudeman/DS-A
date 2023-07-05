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

    mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
    
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
    
        return this.merge(this.mergeSort(left), this.mergeSort(right));
    }
    
    merge(left, right) {
        let result = [];
        let i = 0;
        let j = 0;
    
        while (i < left.length && j < right.length) {
            if (left[i][1] > right[j][1]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
    
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
    

    top(numTopPlayers) {
        let board = this.mergeSort(this.leaderBoard);
        let ans = 0;
    
        for (let k = 0; k < numTopPlayers; k++) {
            ans = ans + board[k][1];
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

// time 4.824 ms
