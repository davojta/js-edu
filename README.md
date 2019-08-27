# JS EDU

## History
Rolling scopes school is famous for very difficult program which takes a lot of time. To study javascript language details, ecosystem basics and tools is needed 800 hours. To study programming from scratch (loops, if operators, basic data structures) is needed 500 hours.

## Task
Your task is to implement function `getTimeForEducation` which calculates how many weeks *education process* take place. The function takes current student focus as string and config of how quickly student can study. The function returns amount of days which need to accomplish education.

For example:
```js
   // education time config
   const speedConfig = {
    family: 4,
    friends: 10,
    normal_life: 20,
    profession: 30
    carrier: 40,
    top_peformance: 60
   }
   const knowsProgramming = true;
  let weeks = getTimeForEducation('family', true, speedConfig);
  console.log(weeks); // 
```

Write your code in `src/index.js.
*Be sure, that all tests are positive. That means you cannot catch any error in tests.*


## Prepare and test

- Install [Node.js](https://nodejs.org/en/)
- Clone this repository: `git clone https://github.com/SIARHEI-SMANTSAR/love-triangle.git`
- Go to folder `js-edu`
- Run `npm install` in command line
- Run `npm test` in command line
- You will see the number of passing and failing tests
