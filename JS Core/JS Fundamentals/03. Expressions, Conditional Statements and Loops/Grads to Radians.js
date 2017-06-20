function gradianToDegree(input) {
    let grads = Number(input[0]);

    grads = grads % 400;
    grads += 400;
    grads = grads % 400;

    // Result in degrees
    return grads * 0.9;
}
console.log(gradianToDegree([-50]));
console.log(gradianToDegree([400]));
console.log(gradianToDegree([850]));