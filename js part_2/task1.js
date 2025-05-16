// Task-1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
// 2. Usethefunctiontocalculatetheaverageforbothteams
// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
// 5. Ignoredrawsthistime
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

const calcAverage=(a,b,c)=>(a+b+c)/3
const dolphinsAvg=calcAverage(44,23,71);
const koalasAvg=calcAverage(65,54,49);
function checkWinner(dolphinsAverage,koalasAverage)
{
    if (dolphinsAverage>= 2* koalasAverage)
    {
        console.log(`Dolphins wins by ${dolphinsAverage} vs koalas ${koalasAverage}`);
    }
    else if(koalasAverage >= 2*dolphinsAverage)
    {
        console.log(`Koalas wins by ${koalasAverage} vs Dolphins ${dolphinsAverage}`);
    }
    else{
        console.log(`No one wins the battle`);
    }
}
checkWinner(dolphinsAvg,koalasAvg);