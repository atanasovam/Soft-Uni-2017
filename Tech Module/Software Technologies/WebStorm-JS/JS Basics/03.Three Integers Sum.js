function sum(arr) {
    let numbers = arr[0].split(' ').map(Number);
    console.log(
        check(numbers[0], numbers[1], numbers[2])||
        check(numbers[0], numbers[2], numbers[1])||
        check(numbers[1], numbers[2], numbers[0])|| 'No');

    function check(num1, num2, sum) {
        if(num1 + num2 != sum ){
            return false;
        }
        else if(num1 >= num2){
            [num1, num2] = [num2, num1];
        }

        return `${num1} + ${num2} = ${sum}`;
    }
}