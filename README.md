# JS EDU

## History
The Rolling Scopes School is widely known for its difficult curriculum that takes a lot of time. It usually takes 800 hours (give or take) to master the JavaScript language, its ecosystem and related tools. About 500 hours are required to learn pretty basic programming (loops, if-else operators (flow of control), basic data structures and algorithms) from scratch.

## Task
Your task is to implement the `getTimeForEducation` function that calculates how many weeks the *education process* would take under given conditions. The function should take the current student status as string and config of how quickly student can study. The function should return the amount of weeks required to complete the course.

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
*All test cases are designed as “error-free”, so don't worry about handling any errors.*


## Prepare and test

- Install [Node.js](https://nodejs.org/en/)
- Clone this repository: `git clone https://github.com/SIARHEI-SMANTSAR/love-triangle.git`
- Go to folder `js-edu`
- Run `npm install` in command line
- Run `npm test` in command line
- You will see the number of passing and failing tests
