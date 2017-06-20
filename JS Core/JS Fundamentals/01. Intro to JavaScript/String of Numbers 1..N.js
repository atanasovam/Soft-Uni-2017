function stringOfNums([n]) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        result += i;
    }
    console.log(result);
}

stringOfNums(["11"]);