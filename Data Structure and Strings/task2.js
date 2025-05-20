/*Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1. Loopoverthegame.scoredarrayandprinteachplayernametotheconsole, along with the goal number (Example: "Goal 1: Lewandowski")
2. Usealooptocalculatetheaverageoddandlogittotheconsole(Wealready studied how to calculate averages, you can go check if you don't remember)
3. Printthe3oddstotheconsole,butinaniceformattedway,exactlylikethis:
Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
4. Bonus:Createanobjectcalled'scorers'whichcontainsthenamesofthe players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
       Gnarby: 1,
       Hummels: 1,
       Lewandowski: 2
}*/
game.scored.forEach((player, i) => {
    console.log(`Goal ${i + 1}: ${player}`);
  });
  
  const odds = Object.values(game.odds);
  const averageOdd = odds.reduce((sum, odd) => sum + odd, 0) / odds.length;
  console.log(`Average odd: ${averageOdd.toFixed(2)}`);
  
  for (const [key, odd] of Object.entries(game.odds)) {
    const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
  }
  
  const scorers = {};
  for (const player of game.scored) {
    scorers[player] = (scorers[player] || 0) + 1;
  }
  console.log(scorers);
  