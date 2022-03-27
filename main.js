// Single Element Selector
 
//console.log(document.getElementById('my-form'));
const form = document.getElementById('my-form');



console.log('I am here');

console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));
console.log(form);

// Multiple Element Selector

console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));


// How to loop through the items

const items = document.querySelectorAll('.item');

items.forEach((item)=> console.log(item));

// Lets do some dom (Document Object Model) changes

const ul  = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'MeowCat';
ul.lastElementChild.innerHTML = '<h1> Hello Pika </h1>';


const btn = document.querySelector('.btn');
btn.style.background = 'blue';

const btnAgain = document.querySelector('.btn');
/*
btnAgain.addEventListener('mouseout', (e)=>{
    e.preventDefault();
    //console.log('clicked');
    //console.log(e);
    //console.log(e.target.className);
    console.log(e.target.id);

    document.querySelector('#my-form').style.background= '#ccc';

    document.querySelector('body').classList.add('bg-dark');

    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';


});
*/


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{

    e.preventDefault();

    if(nameInput.value ==='' || emailInput.value ==='')
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(()=> msg.remove(), 3000);
        //alert('Please end fields');
    }
    else
    {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        // Clear fields

        nameInput.value ='';
        emailInput.value=''; 
        console.log('success');
    }
}

