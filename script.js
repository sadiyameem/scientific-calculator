var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }
        if (btntext == '÷') {
            btntext ='/';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

let btns = document.getElementById('btns');
let output = document.getElementById('output');
let quotes = [
    'The first mechanical calculator was invented by Blaise Pascal, a French mathematician, when he was 19 in 1642, to help is father calculate mathematic sums.',
    'Calculators were originally gear driven wheels, but now they use a chip, typically a microchip, and some kind of energy source.',
    'Calculators are often powered with chemical or battery energy, solar energy or electrical energy.',
    'The first handheld calculator was invented by Texas Instruments, an American company, in 1967, and were further developed in the early 1970s.',
    'Scientific calculators are not just for math; they’re used in physics, engineering, and even finance.',
];

btns.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})