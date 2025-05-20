/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
Test data:
§ Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]

*/

const calcAverageHumanAge = ages =>
    ages
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter(humanAge => humanAge >= 18)
      .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  
  // Test data
  const data1 = [5, 2, 4, 1, 15, 8, 3];
  const data2 = [16, 6, 10, 5, 6, 1, 4];
  
  console.log('Average for Data1:', calcAverageHumanAge(data1)); // Expected: ~44
  console.log('Average for Data2:', calcAverageHumanAge(data2)); // Expected: ~47.33
  