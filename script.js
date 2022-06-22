const first = document.querySelector('li');
const second = document.getElementById('second-li');
const button = document.querySelector('button');
// Node List
const lis = document.querySelectorAll('li');
const p = document.createElement('p');
const text = document.createTextNode('Helooooo World');
// p.textContent = 'Helooooo Nurse';
p.append(text);

// HTML collection - Lacks power, use Node List instead. 
// const className = document.getElementsByClassName('byClass');

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
// lis[0].setAttribute('value', 4); // does same as above.
// lis[0].setAttribute('class', 'big honey');
// lis[0].classList.remove('big');
// second.classList.add('big', 'honey');
// function toggleClass(){
//     lis[2].classList.toggle('big');
// }
// button.addEventListener('click', toggleClass);

// Use classList, NOT className.

// document.body.append(p); // Adds to the end
// document.body.prepend(p); // Adds to beginning

// document.body.innerHTML += `<p>Don't use this..</p>`; // AVOID!!

// NOT GOOD
// for (let i = 0; i < 3; i++) {
//     const parent = document.querySelector('ol');
//     const li = document.createElement('li');
//     li.textContent = `List item with index: ${i}`;
//     parent.append(li);
// }

//  GOOD
// const parent = document.querySelector('ol');
// const fragment = document.createDocumentFragment();
// const lisToAdd = [];
// for (let i = 0; i < 3; i++) {
//     const li = document.createElement('li');
//     li.textContent = `List item with index: ${i}`;
//     lisToAdd.push(li);
// }
// parent.append(...lisToAdd);


//  GOOD - ALT, using fragment
const parent = document.querySelector('ol');
const fragment = document.createDocumentFragment();
const lisToAdd = [];
for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.textContent = `List item with index: ${i}`;
    fragment.append(li);
}
parent.append(fragment);

// REMOVE elements
// Verbose method
// lis[0].parentNode.removeChild(lis[2]);

// Simplified 
lis[2].remove();

// DOM Sizes