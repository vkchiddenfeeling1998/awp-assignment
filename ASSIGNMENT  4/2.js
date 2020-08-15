let count = 1;

function increment() {
    let x = document.querySelector("#num");

    count = count + 1;
    x.innerHTML = count;
}

function drecrement() {
    let y = document.querySelector("#num");
    count = count - 1;
    y.innerHTML = count;
}