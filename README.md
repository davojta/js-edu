# JS EDU

## History
The Rolling Scopes School is widely known for its difficult curriculum that takes a lot of time. It usually takes 800 hours to master the JavaScript language, its ecosystem and related tools. About 500 hours are required to learn pretty basic programming (loops, if-else operators (flow of control), basic data structures and algorithms) from scratch.

## Task
Your task is to implement the `getTimeForEducation` function that calculates how many weeks the *education process* would take under given conditions. The function should take the current student priority as string and config of how quickly student can study. The function should return the amount of weeks required to complete the course.

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
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: https://github.com/davojta/js-edu 
3. Clone your newly created repo: https://github.com/<%your_github_username%>/js-edu/  
4. Go to folder `js-edu`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run `npm test` in the command line  
7. You will see the number of passing and failing tests you 100% of passing tests is equal to 100p in score  

## Submit to [rs app](https://app.rs.school)
1. Open [rs app](https://app.rs.school) and login
2. Go to [submit task page](https://app.rs.school/course/submit-task?course=rs-2019-q3)
3. Select your task (js-edu)
4. Press the submit button and enjoy 

