var likecount = 0;
function like() {
    likecount++;

    document.querySelector("#likeid").innerHTML = "like" + likecount;
}

function comment() {
    let usercmt = document.querySelector("#inp1").value;
    let newelement = document.createElement("div");
    newelement.textContent = usercmt;



    newelement.style.color = "black";
    newelement.style.background = "rgb(235, 235, 218)";
    newelement.style.border = "1px solid black";
    newelement.style.borderRadius = "5px";
    newelement.style.marginTop = "5px";
    newelement.style.height = "20px";

    let commentbox = document.querySelector("#commentbox");
    commentbox.insertBefore(newelement, commentbox.firstChild);
    document.querySelector("#inp1").value = "";



}