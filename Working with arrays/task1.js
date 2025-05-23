/*Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Juliafoundoutthattheownersofthefirstandthelasttwodogsactuallyhave cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. CreateanarraywithbothJulia's(corrected)andKate'sdata
3. Foreachremainingdog,logtotheconsolewhetherit'sanadult("Dognumber1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy   ")
4. Runthefunctionforbothtestdatasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

function checkDogs(dogsJulia, dogsKate) {
  // 1. Shallow copy of Julia's data and remove cats (first and last 2)
  const juliaCorrected = dogsJulia.slice(1, -2);

  // 2. Combine both arrays
  const allDogs = [...juliaCorrected, ...dogsKate];

  // 3. Loop through and log if each dog is adult or puppy
  allDogs.forEach((age, i) => {
    const type = age >= 3 ? "an adult" : "still a puppy";
    console.log(`Dog number ${i + 1} is ${type}, and is ${age} years old`);
  });
}
console.log("--- Data Set 1 ---");
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log("--- Data Set 2 ---");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
