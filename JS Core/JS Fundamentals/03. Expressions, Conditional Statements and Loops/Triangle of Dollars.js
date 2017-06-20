function printTriangle(input) {
    let n = Number(input[0]);
    for (let i = 0; i <= n; i++) {
        console.log('$'.repeat(i));
    }
}
printTriangle([5]);
