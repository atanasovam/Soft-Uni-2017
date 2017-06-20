function findUsername(input) {
    let usernames = [];

    for (let email of input) {
        let [alias, domain] = email.split('@');
        let username = alias + '.';
        let domParts = domain.split('.');
        domParts.forEach(e => username += e[0]);
        usernames.push(username);
    }
    return usernames.join(', ');
}
console.log(findUsername(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']));
