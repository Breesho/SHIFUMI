let symbolplayer = document.querySelectorAll('.symbol-player');
let symbolbot = document.querySelectorAll('.symbol-bot');
let start = document.querySelectorAll('.start-battle');
let resultat = document.querySelector('.resultat');
let errorMessage = document.querySelector('.error');

let playerchoice;
let botchoice;

let victory = document.querySelector('.victoire');
let lose = document.querySelector('.defaite');
let draw = document.querySelector('.egalite');

console.log(symbolplayer);
console.log(symbolbot);
console.log(start);
console.log(resultat);

function random() {
    return Math.floor(Math.random() * symbolbot.length);
}


function resetbtn(index, bg, border) {
    for (i = 0; i < symbolplayer.length; i++) {
        symbolplayer[i].style.backgroundColor = '';
        symbolplayer[i].style.border = '';
    }
    symbolplayer[index].style.backgroundColor = bg;
    symbolplayer[index].style.border = border;
}

symbolplayer[0].addEventListener('click', function () {
    playerchoice = 0;
    resetbtn(0, '#153243', 'solid 6px #76d495');

});

symbolplayer[1].addEventListener('click', function () {
    playerchoice = 1;
    resetbtn(1, '#153243', 'solid 6px #76d495');
});

symbolplayer[2].addEventListener('click', function () {
    playerchoice = 2;
    resetbtn(2, '#153243', 'solid 6px #76d495');
});


function resetbotcolor(index, bg, border) {
    for (i = 0; i < symbolbot.length; i++) {
        symbolbot[i].style.backgroundColor = '';
        symbolbot[i].style.border = '';
    }
    symbolbot[index].style.backgroundColor = bg;
    symbolbot[index].style.border = border;
}


myButton.addEventListener("click", function () {
    let botchoice = random();

    if (playerchoice != 0 && playerchoice != 1 && playerchoice != 2) {
        errorMessage.innerHTML = 'Veuillez sélectionner un bouton';
        errorMessage.style.fontSize = '16px';
        errorMessage.style.color = '#870000';
    }
    else if ((playerchoice === 0 && botchoice === 2) || (playerchoice === 1 && botchoice === 0) || (playerchoice === 2 && botchoice === 1)) {
        resultat.innerHTML = 'vous avez gagné'
        resultat.style.color = '#76d495';
        victory.innerHTML += '|';
        errorMessage.innerHTML = '';
        resetbotcolor(botchoice, '#153243', 'solid 6px #76d495');
    } 
    else if ((playerchoice === 0 && botchoice === 0) || (playerchoice === 1 && botchoice === 1) || (playerchoice === 2 && botchoice === 2)) {
        resultat.innerHTML = ' c\'est une égalité'
        resultat.style.color = '#153243';
        draw.innerHTML += '|';
        errorMessage.innerHTML = '';
        resetbotcolor(botchoice, '#153243', 'solid 6px #76d495');
    } 
    else {
        resultat.innerHTML = 'vous avez perdu'
        resultat.style.color = '#870000';
        lose.innerHTML += '|';
        errorMessage.innerHTML = '';
        resetbotcolor(botchoice, '#153243', 'solid 6px #76d495');
    }
});