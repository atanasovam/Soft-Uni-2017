function printTriangle(n) {
    for (let i = 1; i <= Number(n); i++) {
        console.log('*'.repeat(i));
    }
    for (let i = Number(n) - 1; i >= 1; i--) {
        console.log('*'.repeat(i));
    }
}
printTriangle(['1']);
console.log();
printTriangle(['2']);
console.log();
printTriangle(['5']);
