let guessText = "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt quod nam ipsum neque laudantium molestiae voluptatibus quo nulla aut iste";
let finalText = "";
let randomTextTab = [];
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "@"];
let text = document.querySelector(".test");

//let randomInterval = setInterval(searchLetter,100);



// function searchLetter(){
//     randomIndex = Math.floor(Math.random() * alphabet.length);
//     randomLetter = alphabet[randomIndex];
    
//     if(randomLetter == guessText){
//         clearInterval(randomInterval);

//     }
//     text.textContent = `${randomLetter}`
    
// }




for (let i = 0; i < guessText.length; i++) {
    randomIndex = Math.floor(Math.random() * alphabet.length);
    randomLetter = alphabet[randomIndex];
    
    if(guessText[i] != " "){
        randomTextTab.push(randomLetter);
    } else {
        randomTextTab.push(" ");
    }
    
    
}
console.log(randomTextTab);

let randomText = randomTextTab.join("");
console.log(randomText);
text.textContent = `${randomText}`