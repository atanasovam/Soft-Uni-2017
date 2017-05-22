/**
 * Created by atama on 21.5.2017 г..
 */
function print(num) {
    n = Number(num);

    let horizontal = n * 2 - 1;
    let vertical = (n % 2 === 0) ? n - 1 : n;
    let output = "";

    if (n <= 2) {
        for (i = 0; i < 3; i++) {
            console.log("+".repeat(3));
        }
    }
    else {
        for (row = 1; row <= vertical; row++) {
            for (col = 1; col <= horizontal; col++) {
                if (row === 1 || row === Math.ceil(vertical / 2) || row === vertical) {
                    output += (col === 1 || col === n || col === horizontal) ? "+" : "-";
                }
                else {
                    output += (col === 1 || col === n || col === horizontal) ? "|" : " ";
                }
            }
            output += "\n";
        }
    }

    console.log(output);
}
print(3);
print(4);
print(5);
print(6);