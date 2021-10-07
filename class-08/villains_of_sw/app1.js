// Function Template

// function nameOfFunction(){
    // your code goes here  
// }


// function getUserName(){
//     let userName = prompt('Please enter your name!');
//     // console.log(userName);
    
//     if(userName == 'Roger'){
//         document.write('<h2>Welcome Lord ' + userName + '</h2>');
//     } else {
//         document.write('<h2>Welcome ' + userName + '</h2>');
//     } 
//     return userName;
// }

// let user1 = getUserName();

// joinTheEmpire(user1);

// console.log(user1);

// function joinTheEmpire(){
//     let userAnswer = prompt('Hello, Do you want to join the Empire?');
//     // console.log('The answer to empire is: ' + userAnswer);
    
//     if(userAnswer == 'yes'){
//         let url = "https://i.ytimg.com/vi/fsiNs4rg8SA/maxresdefault.jpg";
//         document.write('<img id="empire" src="' + url + '">');
//     }
// }


// function makePizza(cheese, meat, crust){
//     console.log('Your pizza is a ' + crust + ', ' + meat + ', ' + cheese +'!');
// }

// makePizza('pepper jack', 'pepperoni', 'stuffed');
// makePizza('cheddar', 'ham', 'thin');
// makePizza('swiss', 'sausage', 'thick');

// Number Guessing Game

// Message when they answer incorrect
// Multiple messages?


function guessingGame(){
    // prompt user to enter a number
    let userAnswer = prompt('Please Enter a number between 1-100');
    let correctAnswer = 71; // maybe we can randomize this later
    let attempts = 8;

    for(let i = 0; i < attempts; i++){
        console.log(i)
        while(userAnswer < 1|| userAnswer > 100){
            userAnswer = prompt('Try Again: Please Enter a number between 1-100');
        }
        if(userAnswer == correctAnswer){
            alert('DING DING DING.  You Got it right');
            break;
        }else if (userAnswer > correctAnswer && i != 7){
            userAnswer = prompt('To High. Try Again 1-100');
        }else if(userAnswer < correctAnswer && i != 7){
            userAnswer = prompt('To Low. Try Again 1-100');
        } else{
            alert('Sorry, you Lost!')
        }
    }
}

guessingGame();
