/**
 * Created by atama on 7.5.2017 г..
 */

function calcAreaCone(input) {
    let [r, h] = input.map(Number);
    let s = Math.sqrt(r * r + h * h);
    let volume = Math.round(((1 / 3) * Math.PI * r * r * h) * 10000) / 10000;
    let area = Math.round((Math.PI * r * (r + s)) * 10000) / 10000;

    console.log("volume = " + volume);
    console.log("area = " + area);


}
console.log(calcAreaCone(['3', '5']));