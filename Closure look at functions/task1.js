/*Coding Challenge #1
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.
Your tasks:
1. Createamethodcalled'registerNewAnswer'onthe'poll'object.The method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this: What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
2. Callthismethodwhenevertheuserclicksthe"Answerpoll"button.
3. Createamethod'displayResults'whichdisplaysthepollresults.The
method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Runthe'displayResults'methodattheendofeach 'registerNewAnswer' method call.
5. Bonus:Usethe'displayResults'methodtodisplaythe2arraysinthetest data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?
*/
let poll = {
  question: "What is your favourite programming language?",
  options: ["JavaScript", "Python", "Rust", "C++"],
  answers: [0, 0, 0, 0],
  registerNewAnswer: function () {
    console.log("Poll created!");
    console.log("Question:", this.question);
    console.log("Options:", this.options);
    console.log("Answers:", this.answers);
    let answer = prompt(
      this.question +
        "\n0: " +
        this.options[0] +
        "\n1: " +
        this.options[1] +
        "\n2: " +
        this.options[2] +
        "\n3: " +
        this.options[3] +
        "\n(Write option number)"
    );
    let parsedAnswer = parseInt(answer);
    if (
      !isNaN(parsedAnswer) &&
      parsedAnswer >= 0 &&
      parsedAnswer <= this.options.length - 1
    ) {
      this.answers[parsedAnswer] += 1;
    } else {
      console.log("Invalid answer");
    }
    this.displayResults("array");
  },
  displayResults: function (type) {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log("Poll results are " + this.answers.join(", "));
    }
  },
};
poll.registerNewAnswer();
poll.displayResults("string");
poll.displayResults("array");
console.log(poll.answers);
