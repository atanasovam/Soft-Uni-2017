function typeOfNum(input) {
    let num = Number(input[0]);
    return (((num * 10) % 10 === 0)) ? evenOrOdd(num) : console.log("invalid");

    function evenOrOdd(num) {
        return (num % 2 === 0) ? console.log("even") : console.log("odd");
    }
}
typeOfNum(['3']);
