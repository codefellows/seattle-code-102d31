let userAnswer = prompt('Do you want to join the Empire?');
console.log('The answer to empire is: ' + userAnswer);

if(userAnswer == 'yes'){
    let url = "https://i.ytimg.com/vi/fsiNs4rg8SA/maxresdefault.jpg";
    document.write('<img id="empire" src="' + url + '">');
    // <img src="https://i.ytimg.com/vi/fsiNs4rg8SA/maxresdefault.jpg">
}