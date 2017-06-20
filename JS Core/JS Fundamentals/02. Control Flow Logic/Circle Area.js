function calcAreaCr([r]) {
    let area = Math.PI * r * r;
    console.log(area);

    let roundedArea = Math.round(area * 100) / 100;
    console.log(roundedArea);
}
calcAreaCr(['5']);