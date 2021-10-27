const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  // let positionData;
  console.log('Getting position...');
  setTimer(1000).then(() => {
    console.log("Timer done!");
  });
 let posData;
 let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
   console.log(timerData, posData);
  //  getPosition() {
    // .then((posData) => {
    //   positionData = posData;
    //   return setTimer(2000);
    // })
    // .catch(err => {
    //   console.log(err);
    //   return 'on we go...';
    // })
    // .then((data) => {
    //   console.log(data, positionData);
    // });
  // setTimer(1000).then(() => {
  //   console.log("Timer done!");
  // });
  // console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);

Promise.race([  // only show the fastest promise who will end first
  getPosition(),
  setTimer(1000)  
]).then(data => {
  console.log(data);
});

Promise.all([   //if one promise of two feild so it just stop, if one promise need 5000 msec so promise will waite and then only work
  getPosition(),
  setTimer(5000)
]).then(promiseData => {
  console.log(promiseData);
});

Promise.allSettled([   //show arrey of promise where you have status and value of that promises
  getPosition(),
  setTimer(1000)
]).then(promiseData => {
  console.log(promiseData);
});

// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }
// console.log(result);
