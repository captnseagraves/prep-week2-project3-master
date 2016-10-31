/*
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Output each item in the following Array to your console within their own paragraphs:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];

for (var i = 0; i < livingRoom.length; i++) {
    document.getElementById('q1').innerHTML += "<p>" + livingRoom[i] + "</p>";
}


// 2. Using a loop, log numbers 22-33 within their own paragraphs.

for (var num = 22; num <= 33; num++) {
    document.getElementById('q2').innerHTML += "<p>" + num + "</p>";

}


// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
for (var num2 = 75; num2 <= 100; num2 += 5) {
    document.getElementById('q3').innerHTML += "<p>" + num2 + "</p>";

}




// 4. Write a while loop that displays paragraphs of "This is how a professional loops." to the HTML page 5 times.

var professional = "This is how a professional loops."
var num = 0
while (num <= 4) {
    num++;
    document.getElementById('q4').innerHTML += "<p>" + professional + "</p>";
}




// 5. Separately, use both a for loop and while loop to do the same thing.
//     Display in unique paragraphs the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.
//

for (var i = 10; i <= 110; i += 25) {
    document.getElementById('q5a').innerHTML += "<p>" + `At home, I have ${i} cats.` + "</p>";
}


var cats = 10
while (cats <= 110) {
    document.getElementById('q5b').innerHTML += "<p>" + `At home, I have ${cats} cats.` + "</p>";
    cats += 25
}



// 6. Given the following Array, display in unique paragraphs'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];
var num = numArray[i]

for (i = 0; i < numArray.length; i++) {
    if (num % 2 === 0) {
        document.getElementById('q6').innerHTML += 'Even'
    }
    //    else if (num[i]%2 === 0) && (num[i]> 10)
    // {document.getElementById('q6').innerHTML = 'Even and greater than 10'
    // }
}

// for(i=0;i<numArray.length;i++){
//   var num = numArray[i];
//
//   if((num%2 === 0) && (num>10)){
// 	document.getElementById("q6").innerHTML += "<p>Even and greater than 10.</p>";
//   }
//   else if(num%2 === 0){
//     console.log("Even");
// 	document.getElementById("q6").innerHTML += "<p>Even.</p>";
//
//   }
//   else{
// 	 document.getElementById("q6").innerHTML += "<p>Odd.</p>";
//   }
// }




// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77];

var numThrees = []

for (var i = 0; i < numArray.length; i += 3) {
    numThrees.push(numArray[i]);
}
document.getElementById("q7").innerHTML += "<p>" + numThrees + "</p>";





// 8. Write a loop that outputs the following to unique paragraphs:
// #
// ##
// ###
// ####
// #####
// ######
// #######

var hash = " "
for (var i = 0; i < 7; i++) {
    hash += "#";
    document.getElementById("q8").innerHTML += "<p>" + hash + "</p>";
}






// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.


for (i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.getElementById("q9").innerHTML += "<p>" +"FizzBuzz" + "</p>"
    } else if (i % 3 === 0) {
        document.getElementById("q9").innerHTML += "<p>" +"Fizz" + "</p>"
    } else if (i % 5 === 0) {
        document.getElementById("q9").innerHTML += "<p>" +"Buzz" + "</p>"
    } else {
        document.getElementById("q9").innerHTML += "<p>" + i + "</p>"
    }
}



// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.
// 11. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//     For reference:
//     Math.random gives you a random number between 0 and 1, which is different each time you call it.
// 12. Let's start our conditional statement.
//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"
// 13. Using both "human" and the computer choice, begin another conditional statement to compare them.
// 14. After comparing, determine who has won; the computer or the human!
// 15. Give yourself a high five for completing your first javascript game!
// BONUS: What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
var compare = function(userChoice, computerChoice) {

        if (userChoice === computerChoice) {
            window.alert("The result is a tie!");
        }
        else if (userChoice === "rock") {
            if (computerChoice === "scissors") {
                window.alert("You Win! Rock beats Scissors.");
            } else {
                window.alert("You Lose! Paper beats Rock.");
            }
          }
            else if (userChoice === "paper") {
                if (computerChoice === "rock") {
                    window.alert("You Win! Paper beats Rock.");
                } else {
                    window.alert("You Lose! Scissors beats Paper.");
                }
              }
              else if (userChoice === "scissors") {
                    if (computerChoice === "paper") {
                        window.alert("You Win! Scissors beats Paper.");
                    } else {
                        window.alert("You Lose! Rock beats Scissors.");
                    }
                  }
                };


// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.

// Could not think of conditioanl statement to make functions, but found easier way.
var largestNum = [-5, -2, -6, 0, -1]
largestNum.sort(function(a,b){
  return(b - a)
})
var biggestNum = largestNum[0]
document.getElementById('q16').innerHTML = "Largest number is: " + biggestNum

// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:
var coin = Math.floor(Math.random() * 2);
// console.log(coin);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)

// Functions, but is not very clean when trying to add problem 18 on top.
// if (coin > .49 ) {
//   document.getElementById('q17').innerHTML = "Heads"
// } else if (coin < .49) {
//   document.getElementById('q17').innerHTML = "Tails"
// }
var side = ["Heads", "Tails"]
var result = side[coin]
document.getElementById('q17').innerHTML += result




// 18. Use a do/while loop to keep flipping the coin until you get tails.
// while (coin2 > .49) {
//   var coin2 = Math.floor(Math.random() * 2);
//   if (coin2 > .49 ) {
//     document.getElementById('q18').innerHTML = " Bummer, heads"
//   } else if (coin2 < .49) {
//     document.getElementById('q18').innerHTML = "Yeeeeessss, tails"
//   }
// }
var coin = Math.floor(Math.random() * 2);
var side = ["Heads", "Tails"]
var result = side[coin]
while (result === "Heads") {
  var coin = Math.floor(Math.random() * 2);
  if (coin === 0) {
    result === "Heads"
    document.getElementById('q18').innerHTML = " Bummer, heads"
  }else {
    result === 'Tails'
    document.getElementById('q18').innerHTML = "Yeeeeessss, tails"
  }
}



// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

var size = 8
var board = ""
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x+y)%2 ===0) {
      board += " "
    }else {
      board += "#"
    }
  }board += "\n"
}
console.log(board);
// console.log creates correct board

// Sending it to the HTML does not...
// document.getElementById('q19').innerHTML = board




// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.


var size = 20
var board = ""
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x+y)%2 ===0) {
      board += " "
    }else {
      board += "#"
    }
  }board += "\n"
}
console.log(board);
 // same issue as above





/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
