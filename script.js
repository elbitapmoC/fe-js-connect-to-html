const button = document.querySelector('#clickMe');
button.addEventListener('click', setBackground);

function setBackground(){
    document.body.style.backgroundColor = 'honeydew';
}