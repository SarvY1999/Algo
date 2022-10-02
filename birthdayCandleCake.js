function birthdayCakeCandles(candles) {

    let count = 0;

    // sorting array
    let newArr = candles.sort((a, b) => {
        return a - b;
    });

    let tallestEle = newArr[newArr.length - 1] // storing the last element of array

    //counting the similar no of candles 
    for (let i = 0; i < newArr.length; i++) {
        if (tallestEle == newArr[i]) {
            count++;
        }
    }
    return count;
}

//let a = [3, 2, 1, 3];
console.log(birthdayCakeCandles(a));