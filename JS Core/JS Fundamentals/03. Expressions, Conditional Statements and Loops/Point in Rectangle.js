function isInRect(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);

    return (x >= xMin && x <= xMax && y >= yMin && y <= yMax)
        ? 'inside' : 'outside';
}
console.log(isInRect(['8', '-1', '2', '12', '-3', '3'])); //inside
console.log(isInRect(['12.5', '-1', '2', '12', '-3', '3'])); //outside