function focus() {
    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener('focus', onfocus);
        input.addEventListener('blur', onblur);
    }

    function onfocus(event) {
        this.parentNode.className = 'focused';
    }

    function onblur(event) {
        this.parentNode.className = '';
    }
}