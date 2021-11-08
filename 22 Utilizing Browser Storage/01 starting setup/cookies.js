console.log(document.cookie);

const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');


storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = {name: 'Max', age: 30};
  document.cookie = `uid=${userId}; max-age=360`; // max-age parametr let you expire cookie in seconds // expires - parametr that exacly make cookie expire at that time what writen
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
  console.log(document.cookie);
  const cookieData = document.cookie.split(';');
  const data = cookieData.map(i => {
    return i.trim();
  })
  console.log(data[1].split('=')[1]); // user value
});
