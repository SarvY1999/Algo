function diagonalDifference(arr) {
    let leftDigonal = 0;
    let rightDigonal = 0;
    let absoluteDigDiff = 0;

    for (let i = 0; i < arr.length; i++) {
        leftDigonal = leftDigonal + arr[i][i]
        rightDigonal = rightDigonal + arr[arr.length - 1 - i][i]; //we are reducing  tha value of i by 1
    }

    console.log(leftDigonal);
    console.log(rightDigonal);
    absoluteDigDiff = leftDigonal - rightDigonal;

    return Math.abs(absoluteDigDiff);
}

console.log(diagonalDifference(a));


