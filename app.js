//let guessText = "Lorem ipsum dolor sit amet consectetur adipisicing elit Sunt quod nam ipsum neque laudantium molestiae voluptatibus quo nulla aut iste";
let guessText = "HELLO WORLD"
let guessTextTab = guessText.split("");
let finalText = "";
let randomTextTab = [];
let findLetterTab = [];
let time = 0;

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "@"];
let text = document.querySelector(".test");

// let randomInterval = setInterval(searchLetter,100);



// function searchLetter(){
//     randomIndex = Math.floor(Math.random() * alphabet.length);
//     randomLetter = alphabet[randomIndex];

//     if(randomLetter == guessText){
//         clearInterval(randomInterval);

//     }
//     text.textContent = `${randomLetter}`

// }

//verifyInterval = setInterval(verify,100)
timerInterval = setInterval(timer,1);
rdmTextInterval = setInterval(rdmText, 100)


function verify() {
    let findLetter = findLetterTab.join("");
    for (let i = 0; i < randomTextTab.length; i++) {
        
        if (randomTextTab[i] == guessText[i]) {
            findLetterTab[i] = guessText[i]
                
        } 


    }
    
    if(findLetter == guessText){
        clearInterval(rdmTextInterval);
    }
    
    console.log(findLetter);
};

function timer(){
    if(timer < 5000){
        time ++
    }else {
        clearInterval(timerInterval);
    }

    
    
};
function rdmText() {
    while (randomTextTab.length != 0) {
        randomTextTab.pop();
    };

    for (let i = 0; i < guessText.length; i++) {
        randomIndex = Math.floor(Math.random() * alphabet.length);
        randomLetter = alphabet[randomIndex];
        if (guessText[i] != " ") {
            randomTextTab.push(randomLetter);
        } else {
            randomTextTab.push(" ");
        }
    };

    let randomText = randomTextTab.join("");
    text.textContent = `${randomText}`;
    verify()
};











