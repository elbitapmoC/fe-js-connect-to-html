const first = document.querySelector('li');
const second = document.getElementById('second-li');
const button = document.querySelector('button');
// Node List
const lis = document.querySelectorAll('li');

// HTML collection - Lacks power, use Node List instead. 
const className = document.getElementsByClassName('byClass');

// console.log(first);
// console.log(second);
// console.log(lis);
// console.log(className);
// lis.forEach(li => {
//     console.log(li);
// });

// ALT - Could use Array.from to create an array from an iterable.
// Array.from(lis).map(li => {console.log(li)});

// lis[0].style.backgroundColor = 'gray';
// lis[0].textContent = 'Changed!';
// lis[0].value = 3; // effects the order of li's
lis[0].setAttribute('value', 4); // does same as above.
lis[0].setAttribute('class', 'big honey');
lis[0].classList.remove('big');
second.classList.add('big', 'honey');
function toggleClass(){
    lis[2].classList.toggle('big');
}
button.addEventListener('click', toggleClass);

// Use classList, NOT className.