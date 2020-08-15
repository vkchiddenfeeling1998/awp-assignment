function mousein() {
    console.log("success");

    let a = document.querySelector("div").children[0];
    a.style.color = "brown";
    a.style.background = "yellow";

    a.innerHTML = "you are best div elemt"
}
function mouseout() {
    let b = document.querySelector("div").children[0];
    b.style.color = "blue";
    b.style.background = "lightgreen";

    b.innerHTML = "Hey! ClickMe";
}