function mousein() {
    console.log("success");

    let a = document.querySelector(".inner");
    a.style.color = "brown";
    a.style.background = "pink";

    a.innerHTML = "you are best class selector"
}
function mouseout() {
    let b = document.querySelector(".inner");
    b.style.color = "black";
    b.style.background = "yellow";

    b.innerHTML = "Hey! ClickMe";
}