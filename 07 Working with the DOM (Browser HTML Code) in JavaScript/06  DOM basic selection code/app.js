// const listItemElements = document.querySelectorAll('li');  // this gives the list of original elements 
// const listItemElements = document.getElementsByTagName('li');  // this gives the list of elements right now 

// const h1 = document.getElementById('main-title');

// h1.textContent = 'Some new title';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';

// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent + ' (Changed!)';

// const listItemElements = document.getElementsByTagName('li');

// for (const listItemEl of listItemElements) {
//   console.dir(listItemEl);
// }

// const ul = document.body.firstElementChild.nextElementSibling;
// const firstLi = ul.firstElementChild;

// console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

section.className = 'red-bg';

button.addEventListener('click', () =>{
  section.classList.toggle('invisible');
});

const div = document.querySelector('div');
div.innerHTML = div.innerHTML + '<p>Somthing went wrong!</p>'; // in this case all our information inside <div></div> will automaticly restore to default 
                                                              //(it means default html code) + it added our new message;
// for such cases where we need to hold new information visible to user inside our application we do
div.insertAdjacentHTML('beforeend', '<p>Somthing went wrong</p>'); // can google for more understanding 'beforeend' in this case we add new information without 
                                                                //returning to default html code

const list = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = 'Item 4';
list.appendChild(newLi); // this will add new element to the end of the list in our case it is <li></li> element with text inside Item 4
list.append('Some text'); // this will add to the end of element list in our case it is first <ul></ul> some text to the end
list.innerHTML = list.innerHTML + '<li>Item 5</li>';
list.prepend(newLi); // this will add new element to the begining of the list in our case it is <li></li> element with text inside Item 4
list.lastElementChild.before(newLi); // this will moved created element to the place where we mentioned but if element was created 
                                    // and rendered before so it will moved this element to the position which we call
list.firstElementChild.replaceWith(newLi);  // this will replace element which we mentioned to new element which we mentioned
list.remove(); // same as list.parentElement.removeChild(list); diffrence inside web browser compatible 
list.parentElement.removeChild(list); // same as list.remove(); diffrence inside web browser compatible 
newLi.cloneNode(); // will clone element without it childNode
newLi.cloneNode(true); // will clone element with childNode

