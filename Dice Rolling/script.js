function rollDice() {
    var num1 = Math.floor(Math.random() * 6) + 1;
    var num2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice1').innerHTML ='<h3>Player 1</h3><img src="images/Alea_' + num1 +'.png" alt="Dice">'
    document.getElementById('dice2').innerHTML ='<h3>Player 2</h3><img src="images/Alea_' + num2 +'.png" alt="Dice">'

    if (num1 > num2) {
        document.getElementById('result').innerHTML = '<h2>Player 1 Wins!</h2>'
    }

    else if (num2 > num1) {
        document.getElementById('result').innerHTML = '<h2>Player 2 Wins!</h2>'
    }

    else {
        document.getElementById('result').innerHTML = '<h2>Roll it again!</h2>'
    }
}

rollDice()