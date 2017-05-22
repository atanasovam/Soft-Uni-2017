/**
 * Created by atama on 14.5.2017 г..
 */
function isInRect(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);

    return (x >= xMin && x <= xMax && y >= yMin && y <= yMax)
        ? console.log('inside') : console.log('outside');
}
isInRect(['8', '-1', '2', '12', '-3', '3']); //inside
isInRect(['12.5', '-1', '2', '12', '-3', '3']); //outside