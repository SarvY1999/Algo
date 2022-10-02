function miniMaxSum(arr) {
    let min = 0;
    let max = 0;

    // sorting array
    let newArr = arr.sort((a, b) => {
        return a - b;
    })

    //excluding last element of array
    for (let i = 0; i < newArr.length - 1; i++) {
        min = min + newArr[i]
    }

    //excluding first element of array
    for (let i = 1; i < newArr.length; i++) {
        max = max + newArr[i]
    }
    console.log(min, max);
}

//let a = [7, 69, 2, 221, 8974];
miniMaxSum(a)