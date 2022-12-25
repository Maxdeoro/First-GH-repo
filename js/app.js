const msg = 'Hello World';
console.log(msg);

const bdy = document.querySelector('body');

const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    btn.style.backgroundColor = 'green';
});

btn.addEventListener('onmouseover', (e) => {
    const myDiv = document.createElement('div');
    myDiv.classList.add('my_div');
    myDiv.style.width = '200px';
    myDiv.style.height = '50px';
    myDiv.innerHTML = 'CLICK ME, please!';
    bdy.append(myDiv);
});