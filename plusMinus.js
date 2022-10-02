function plusMinus(arr) {
    let positiveNo = 0;
    let negativeNo = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNo++;
        } if (arr[i] < 0) {
            negativeNo++;
        } if (arr[i] == 0) {
            zero++;
        }
    }
    console.log((positiveNo / arr.length).toFixed(6));
    console.log((negativeNo / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
}

//arr = [-4, 3, -9, 0, 4, 1]

plusMinus(arr);