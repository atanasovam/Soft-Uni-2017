function rounding([n, precision]) {
    let num = Number(n);

    let prcsn = (Number(precision) > 15) ? 15 : Number(precision);

    console.log(Number(num.toFixed(prcsn)));
}
rounding([3.1415926535897932384626433832795, 2]);
rounding([10.5, 3]);