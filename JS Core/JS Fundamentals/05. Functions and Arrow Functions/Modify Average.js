/**
 * Created by atama on 25.5.2017 г..
 */
function modifyAverage(n) {
    n = n.toString();
    while (sumNumbers(n) / n.length <= 5) { n += '9' }

    function sumNumbers(n) {
        let sum = 0;
        for (let i = 0; i < n.length; i++) {
            sum += Number(n[i]);
        }
        return sum;
    }

    console.log(n);
}
modifyAverage(['101']);
modifyAverage(['5835']);
