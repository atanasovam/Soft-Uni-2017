/**
 * Created by atama on 23.5.2017 г..
 */
function isInside(input) {
    let x1 = 10, x2 = 50;
    let y1 = 20, y2 = 80;
    let z1 = 15, z2 = 50;

    let currentX = 0;
    let currentY = 0;
    let currentZ = 0;

    let inside = false;

    for (let i = 0; i < input.length; i += 3) {
        currentX = input[i];
        currentY = input[i + 1];
        currentZ = input[i + 2];

        if ((currentX >= x1 && currentX <= x2) &&
            (currentY >= y1 && currentY <= y2) &&
            (currentZ >= z1 && currentZ <= z2)) {
            inside = true;
        }
        inside === true ? console.log("inside") : console.log("outside");
        inside = false;
    }
}
console.log(isInside([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]));
