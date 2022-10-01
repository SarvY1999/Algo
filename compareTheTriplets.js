

function compareTriplets(a, b) {
    let score1 = 0;
    let score2 = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            score1++;

        } if (b[i] > a[i]) {
            score2++;
        }
    }
    let scoreboard = []
    scoreboard.push(score1);
    scoreboard.push(score2);
    return scoreboard;
};
let a = [17, 28, 30];
let b = [99, 16, 8];
console.log(compareTriplets(a, b));
