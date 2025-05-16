/*There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus1:Include a requirement for a minimum score of 100.With this rule,a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus2:Minimum score also applies to a draw!So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/ 
let dolphinsScore = [96, 108, 89];
let koalasScore = [88, 91, 110];
let dolphinsScoreBonus1 = [97, 112, 101];
let koalasScoreBonus1 = [109, 95, 123];
let dolphinsScoreBonus2 = [97, 112, 101];
let koalasScoreBonus2 = [109, 95, 106];
let avg_dolphinScore = (dolphinsScore[0]+dolphinsScore[1]+dolphinsScore[2])/3;
let avg_koalasScore = (koalasScore[0]+koalasScore[1]+koalasScore[2])/3;
console.log(`Average dolphin score: ${avg_dolphinScore}`);
console.log(`Average koalas score: ${avg_koalasScore}`);
if (avg_dolphinScore>avg_koalasScore){
    console.log(`Dolphins win the trophy!`);
}
else if (avg_koalasScore>avg_dolphinScore){
    console.log(`Koalas win the trophy!`);
}
else{
    console.log(`It's a draw!`);
}

