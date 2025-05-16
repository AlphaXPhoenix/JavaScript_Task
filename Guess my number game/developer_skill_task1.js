let score=20;
let highScore=0;
let guessNumber=Math.trunc(Math.random()*20+1);
console.log(guessNumber);
document.querySelector(".chk_button").addEventListener('click',function(){
    console.log(document.querySelector(".int").value);
    let input=document.querySelector(".int").value;
    if(input>guessNumber && input<=20){
        score--;
        document.querySelector(".svalue").textContent=score;
        document.querySelector(".score_txt").textContent="Too high!";
    }
    else if(input<guessNumber && input>=1){
        score--;
        document.querySelector(".svalue").textContent=score;
        document.querySelector(".score_txt").textContent="Too low!";
    }
    else if(input==guessNumber){
        highScore=score;
        document.querySelector(".hvalue").textContent=highScore;
        document.querySelector(".score_txt").textContent="Correct Number!🎉";
        document.querySelector(".num_rev").textContent=guessNumber;
        document.querySelector(".body").style.backgroundColor="#60b347";

    }
    else{
        document.querySelector(".score_txt").textContent="Please enter number between 1 and 20";
    }
});
document.querySelector(".again_btn").addEventListener("click", function(){
    score=20;
    highScore=0;
    document.querySelector(".svalue").textContent=score;
    document.querySelector(".hvalue").textContent=highScore;
    document.querySelector(".score_txt").textContent="Start Guessing...";
    guessNumber=Math.trunc(Math.random()*20+1);
});
