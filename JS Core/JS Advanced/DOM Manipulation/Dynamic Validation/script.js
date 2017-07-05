function validate() {
    let email = document.getElementById('email');
    email.addEventListener('change', isValid);

    function isValid(event) {
        let regex = /^[a-z]+@[a-z]+\.[a-z]+$/g;
        if (!regex.test(this.value)) {
            this.className = 'error';
        } else {
            this.removeAttribute('class');
        }
    }
}