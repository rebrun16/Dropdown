let intervalId;

document.querySelectorAll(".dropdown-toggle").forEach((e) => {
    e.addEventListener("click", (e) => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll(".dropdown-menu").forEach((e) => {
            if (
                !document
                    .querySelector(`[data-target =${menu}]`)
                    .classList.contains("open")
            ) {
                document
                    .querySelector(`[data-target =${menu}]`)
                    .classList.add("menu-active");
                setTimeout(() => {
                    document
                        .querySelector(`[data-target=${menu}]`)
                        .classList.add("open");
                }, 0);
            }
            if (
                document
                    .querySelector(`[data-target =${menu}]`)
                    .classList.contains("open")
            ) {
                clearTimeout(intervalId);
                document
                    .querySelector(`[data-target =${menu}]`)
                    .classList.remove("menu-active");
                document
                    .querySelector(`[data-target=${menu}]`)
                    .classList.remove("open");
            }

            window.onclick = (e) => {
                if (
                    e.target ==
                        document.querySelector(`[data-target=${menu}]`) ||
                    e.target == document.querySelector(`[data-path=${menu}]`)
                ) {
                    return;
                } else {
                    document
                        .querySelector(`[data-target=${menu}]`)
                        .classList.remove("menu-active");
                    document
                        .querySelector(`[data-target=${menu}]`)
                        .classList.remove("open");
                }
            };
        });
    });
});

let n = 0;
let m = 100;

console.log(Math.round((Math.random() * (m - n)) / 2 + n) * 2 + 1);

let password = "qwerty_-";

if (
    password.length >= 4 &&
    (password.includes("-") || password.includes("_"))
) {
    alert("Пароль надежный");
} else {
    alert("пароль не надежный");
}

let name = "ivan";
let surname = "ivanov";

let correctName =
    name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
let correctSurname =
    surname.substr(0, 1).toUpperCase() + surname.substr(1).toLowerCase();

let resultName =
    correctName != name || correctSurname != surname
        ? "имя преобразовано"
        : "имя преобразщовано";

console.log(correctName, correctSurname);

let array = [];
let nu = 10;
let mu = 20;
let count = 15;

for (let i = 0; i < count; i++) {
    array.push(Math.round(Math.random() * (mu - nu) + nu));
}

console.log(array);

// //////
let roadMines = [
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    true,
];
let step = 2;

for (let i = 0; i < roadMines.length; i++) {
    if ((roadMines[i] = true)) {
        step -= 1;
        if (step == 1) {
            console.log(
                `танк переместился на позицию ${i + 1} ,танк поврежден`
            );
        } else if (step == 0) {
            console.log(
                `танк переместился на позицию ${i + 1} ,танк убит`
            );
            break;
        } else {
            console.log(`танк переместился на позицию ${i + 1}`);
        }
    }
}

// //////////
const quoteText = document.querySelector(".quote"),
    authorName = document.querySelector('.author .name'),
    quoteBtn = document.querySelector("button");
    sound

function randomQuote() {
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'Loading quote...';
    fetch("https://api.quoteble.io/random")
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            quoteText.innerText = result.content;
            authorName.innerText = result.author;
            quoteBtn.innerText = "new quote";
            quoteBtn.classList.remove('loading');
        });
}
quoteBtn.addEventListener("click", randomQuote);


const radio = document.getElementsByName('prim');

for (var)