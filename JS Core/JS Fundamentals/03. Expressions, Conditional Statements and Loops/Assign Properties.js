function properties(input) {
    let [nameK, nameV, ageK, ageV, genderK, genderV] = input.map(e => e);

    let result = {[nameK]: nameV, [ageK]: ageV, [genderK]: genderV};
    console.log(result);
}
properties(['name', 'Pesho', 'age', '23', 'gender', 'male']);