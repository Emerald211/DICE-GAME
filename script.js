function diceRoll() {

  var jj = ["./images/dice1.png" , "./images/dice2.png" , "./images/dice3.png" , "./images/dice4.png" , "./images/dice5.png" , "./images/dice6.png"]
    var you = Math.floor(Math.random() * jj.length);
    const gg = document.querySelector("#we");
    gg.setAttribute("src", jj[you] );
    

    

    var bo = document.getElementById("dice").appendChild(gg);
    console.log(bo);

    var ww = ["./images/dice1.png" , "./images/dice2.png" , "./images/dice3.png" , "./images/dice4.png" , "./images/dice5.png" , "./images/dice6.png"]
    var computer = Math.floor(Math.random() * ww.length);
    
   

    
    const bb = document.getElementById("dice2");
    const im = document.querySelector("#ew");
    const con = document.querySelector(".container")
    im.setAttribute("src", ww[computer])

    bb.append(im);

    const result = document.querySelector("#result")
    
    const resultText = document.querySelector("#resultText");
    

    var firstScore = document.querySelector("#score1");

    var re = Number(firstScore.innerHTML)
    console.log(re) 

    var secondScore = document.querySelector("#score2");
    var se = Number(secondScore.innerHTML)
    console.log(se)

    

   
    

    console.log(firstScore)

    

        


    if (you > computer ) {
        

        result.setAttribute("src", "./images/EMOJI.jpg")
 
        resultText.innerHTML = "YOU WIN !!!!"

        firstScore.innerHTML = re + 1

        
        
    } else if (computer > you){

        result.setAttribute("src", "./images/EMOJI SAD.jfif")
        resultText.innerHTML = "YOU LOSE"
        secondScore.innerHTML = se + 1 
    } else if (computer === you) {
        
        result.setAttribute("src", "./images/arm.jpg")
        resultText.innerHTML = "DRAW"
        return false;
    }
    
}


   
