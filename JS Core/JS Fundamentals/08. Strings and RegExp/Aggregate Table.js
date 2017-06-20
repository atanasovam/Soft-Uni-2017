function aggregate(input) {
    let arr = [], temp = [], tempCity = [];
    let tempN = 0;

    for (let i = 0; i < input.length; i++) {
        arr = input[i].split('| ');
        temp.push(arr[1].trim(), arr[2].trim());
    }
    for (let i = 0; i < temp.length; i += 2) {
        tempCity.push(temp[i]);
        tempN += Number(temp[i + 1]);
    }

    console.log(tempCity.join(', '));
    console.log(tempN)
}
aggregate(['| Sofia           | 300', '| Veliko Tarnovo  | 500', '| Yambol          | 275']);