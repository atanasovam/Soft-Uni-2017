/**
 * Created by atama on 9.6.2017 г..
 */
function emailValidation(email) {
    let pattern = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    let result = pattern.test(email);
    result === true
        ? console.log("Valid")
        : console.log("Invalid");
}
emailValidation('valid@email.bg');
emailValidation('invalid@emai1.bg');