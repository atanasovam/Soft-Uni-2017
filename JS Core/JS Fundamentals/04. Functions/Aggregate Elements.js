function aggregateElements(input) {
    let concat = '';
    let currNum = 0;
    let firstSum = 0;
    let secondSum = 0;

    for (let elem of input) { concat += elem }

    for (let elem of input) {
        currNum = Number(elem);
        firstSum += currNum;
    }

    concat = Number(concat);

    for (let elem of input) { secondSum += 1 / elem }

    console.log(firstSum);
    console.log(secondSum);
    console.log(concat);
}
aggregateElements(['1', '2', '3']);
console.log();
aggregateElements(['2', '4', '8', '16']);
