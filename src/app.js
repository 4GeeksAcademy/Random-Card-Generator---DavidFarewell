import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let countdown = 10;

window.onload = () => {
    generateRandomCard();
    document.getElementById('theCard').addEventListener('click', flipCard);
    document.getElementById('cardWidth').addEventListener('input', resizeCard);
    document.getElementById('cardHeight').addEventListener('input', resizeCard);
    document.getElementById('resetCard').addEventListener('click', resetCard);

    // Mostrar contador
    document.getElementById("countdown").innerText = countdown;

    // Temporizador 
    setInterval(() => {
        countdown--;
        document.getElementById("countdown").innerText = countdown;

        if (countdown === 0) {
            flipCard();
            countdown = 10; // Reiniciar el contador
        }
    }, 1000);
};

//Girar carta

const flipCard = () => {
    let cardElement = document.getElementById('theCard');
    
    cardElement.classList.add("flip");

    setTimeout(() => {
        generateRandomCard();
        cardElement.classList.remove("flip");
    }, 300);
};

 //Generar carta aleatoria

const generateRandomCard = () => {
    let cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suits = ["♦", "♠", "♥", "♣"];
    let colors = { "♦": "red", "♥": "red", "♠": "black", "♣": "black" };

    let randomCardIndex = Math.floor(Math.random() * cardNumbers.length);
    let randomSuitIndex = Math.floor(Math.random() * suits.length);
    let selectedSuit = suits[randomSuitIndex];

    document.getElementById('cardContent').innerHTML = cardNumbers[randomCardIndex];
    document.querySelector('.card-suit.top').innerHTML = selectedSuit;
    document.querySelector('.card-suit.bottom').innerHTML = selectedSuit;
    document.querySelector('.card-suit.top').style.color = colors[selectedSuit];
    document.querySelector('.card-suit.bottom').style.color = colors[selectedSuit];
};

//Cambiar tamaño carta

const resizeCard = () => {
    let width = document.getElementById('cardWidth').value;
    let height = document.getElementById('cardHeight').value;
    let cardElement = document.getElementById('theCard');

    cardElement.style.width = `${width}px`;
    cardElement.style.height = `${height}px`;
    cardElement.style.fontSize = `${width / 2}px`;

    document.querySelectorAll(".card-suit").forEach(el => {
        el.style.fontSize = `${width / 4}px`;
    });
};

//Resetear tamaño carta

const resetCard = () => {
    document.getElementById('cardWidth').value = 300;
    document.getElementById('cardHeight').value = 440;
    resizeCard();
};




