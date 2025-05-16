let markHeight=1.69;
let markMass=78;
let johnHeight=1.95;
let johnMass=92;
let markBmi=markMass/(markHeight*markHeight);
let johnBmi=johnMass/(johnHeight**2);
const markHigherBMI=markBmi>johnBmi;
console.log(markHigherBMI)
markBmi>johnBmi ? console.log(`Mark's BMI is ${markBmi} which is greater than John's BMI`) : console.log(`John's BMI is ${johnBmi} which is greater than Mark's BMI`);