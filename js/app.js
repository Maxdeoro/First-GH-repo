const msg = 'Hello World';
console.log(msg);

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    btn.style.backgroundColor = 'green';
});