const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.setRequestHeader('Content-Type', 'application/json');

//     xhr.open(method, url);

//     xhr.responseType = "json"; // if used set responseType so it makes any JASON data converted atomaticly to java script data

//     xhr.onload = function () {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             resolve(xhr.response);
//             // const listOfPosts = JSON.parse(xhr.response);    // JSON.parse - method to convert JSON data to java script data; JSON.stringify - method to convert java script data to JSON data
//         } else {
//             reject(new Error('Something went wrong!'));
//         }
//     };

//     xhr.onerror = function() {
//         reject(new Error ('Failed to send request!'));
//     }

//     xhr.send(JSON.stringify(data));
    fetch(url); // if u passed fetch reqvest it will automaticly make GET reqvest

//   });
//   return promise;
    return fetch(url, {
        method: method,
        // body: JSON.stringify(data),
        body: data
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    }).then(response => {
        // response.text(); // convert response to text or response.blob() it will give u response as a file
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return response.json().then(errData => {
                console.log(errData);
                throw new Error(`Something went wrong! Code: ${response.status} Info: ${response.statusText}`);
            });
        }
    });
}

async function fetchPosts() {
    try {
        const responseData = await sendHttpRequest(
            "GET",
            "https://jsonplaceholder.typicode.com/posts"
          );
        
          const listOfPosts = responseData;
          for (const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector("h2").textContent = post.title.toUpperCase();
            postEl.querySelector("p").textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
          }
    }
    catch (error) {
        alert(error.message);
    }
  
}

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };
    
    const fd = new FormData(form);  // default constructor which build inside browser
    // fd.append('title', title);   // can be disabled if we have name tag inside input at html code
    // fd.append('content', content);
    fd.append('userId', userId);
    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
}

fetchButton.addEventListener('click', () => {
    fetchPosts();
});

form.addEventListener('click', event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;

    createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
});