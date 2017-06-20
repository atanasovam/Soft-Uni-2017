function escape(input) {
    let str = '<ul>\n';

    for (let i = 0; i < input.length; i++) {
        let replace = input[i];
        replace = replace
            .split('&').join('&amp;')
            .split('<').join('&lt;')
            .split('>').join('&gt;')
            .split('"').join('&quot;');

        str += '  \<li>' + replace + '</li>\n';
    }
    return str + '</ul>';
}
console.log(escape(['<b>unescaped text</b>', 'normal text']));
