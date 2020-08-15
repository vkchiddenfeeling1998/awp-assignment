function handleMouseOver() {
    console.log("i have successfully called.");

    var elementid2 = document.querySelector("#box2");
    elementid2.style.background = "pink";
    elementid2.style.color = "blue";

    elementid2.innerHTML = "hello vaishnavi";
}
function handleMouseOut() {
    console.log("i have called successfully");

    var elementid2 = document.querySelector("#box2");
    elementid2.style.background = "black";
    elementid2.style.color = "white";

    elementid2.innerHTML = "hello world";
}