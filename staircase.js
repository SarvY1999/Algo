function staircase(n) {
    let string = ""
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < n - i; j++) { // for pringting spaces
            string += " ";
        }
        for (let j = 0; j < i; j++) { // for printing hash
            string += "#";
        }
        string += "\n";
    }
    console.log(string);
}

staircase(5);