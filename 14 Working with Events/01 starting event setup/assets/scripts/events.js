const button = document.querySelector('button');

// button.onclick = function() {

// };

const buttonClickHandler = event => {
    // event.target.disabled = true;
    console.log(event);
};

const anotherButtonClickHandler = () => {
    console.log('this was clicked');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler; // second obj will rewrite previous and will run only last mentioned obj;

const boundFn = buttonClickHandler.bind(this);      // if you use bind(this) it will create new instance but if you hold this in new obj and then use that obj so that will be same instance

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//     button.removeEventListener('click', boundFn);
// }, 2000);


// buttons.forEach(btn => {
//     btn.addEventListener('mouseenter', buttonClickHandler)
// });


// window.addEventListener('scroll', event => {
//     console.log(event);
// });

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
});

const div = document.querySelector('div');
div.addEventListener('mouseenter', event => {
    console.log('CLICKED DIV');
    console.log(event);
});

button.addEventListener('click', event => {
    event.stopPropagation();
    event.stopImmediatePropagation();
    console.log('CLICKED BUTTON');
    console.log(event);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight')
//     });
// });

list.addEventListener('click', event => {
    // console.log(event.currentTarget);
    // event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
    // form.submit();
    button.click();
});
