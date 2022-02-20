const form = document.getElementById('form');


const email = document.getElementById('email');

const reset = document.getElementById('resseter');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const passDisp = inputControl.querySelector('.pass');
    const submitterDisp = inputControl.querySelector('.submitter');
    const resseterDisp = inputControl.querySelector('.resseter');
    passDisp.style.cssText = `
  display: block;
  visibility:visible;
`;
resseterDisp.style.cssText = `
display: block;
visibility:visible;
`;
submitterDisp.style.cssText = `
display: none;
visibility:hidden;
`;
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
