/**
 * Created by atama on 9.6.2017 г..
 */
function fillForm(username, email, phone, data) {
    data.forEach(line => {
        line = line.replace(/<![a-zA-Z]+!>/g, username);
        line = line.replace(/<@[a-zA-Z]+@>/g, email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phone);
        console.log(line);
    });
}
fillForm('pit', 'pit@pit.com', '032746',
    ['I am <!user!>, my email is <@email@>, my phone is <+p+>.']);
