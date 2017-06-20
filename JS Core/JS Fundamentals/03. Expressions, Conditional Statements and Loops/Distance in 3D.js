/**Pythagoras theorem
 *First variant*/
function distance3D([x1, y1, z1, x2, y2, z2]) {
    [x1, y1, z1, x2, y2, z2] =
        [x1, y1, z1, x2, y2, z2].map(Number);

    let distance = Math.sqrt(Math.pow(x1 - x2, 2) +
        Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
    console.log(distance);
}

/** Second variant*/
function distanceBetween3dPoints(input) {
    let pointA = {x: Number(input[0]), y: Number(input[1]), z: Number(input[2])};
    let pointB = {x: Number(input[3]), y: Number(input[4]), z: Number(input[5])};

    let distance =
        Math.sqrt(
            Math.pow(pointA.x - pointB.x, 2) +
            Math.pow(pointA.y - pointB.y, 2) +
            Math.pow(pointA.z - pointB.z, 2)
        );
    console.log(distance)
}

distance3D([1, 1, 0, 5, 4, 0]);
distanceBetween3dPoints([1, 1, 0, 5, 4, 0]);