function calcAreaCone(input) {
    let [r, h] = input.map(Number);

    let s = Math.sqrt(r * r + h * h);
    let volume = Math.round(((1 / 3) * Math.PI * r * r * h) * 10000) / 10000;
    let area = Math.round((Math.PI * r * (r + s)) * 10000) / 10000;

    return "volume = " + volume;
    return "area = " + area;
}
console.log(calcAreaCone(['3', '5']));