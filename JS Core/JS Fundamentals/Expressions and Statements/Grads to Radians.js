/**
 * Created by atama on 13.5.2017 г..
 */
function gradianToDegree(input) {
    let grads = Number(input[0]);
    grads = grads % 400;
    grads += 400;
    grads = grads % 400;
    let degrees = grads * 0.9;

    console.log(degrees);
}
gradianToDegree([-50]);
gradianToDegree([400]);
gradianToDegree([850]);