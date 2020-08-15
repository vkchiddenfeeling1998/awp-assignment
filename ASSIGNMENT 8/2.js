//case-1
setInterval(function () {
    console.log("i am also interval")
}, 1000);

//case-2
setInterval(() => {
    console.log("i am also interval,using arrow")
}, 1000);

//case-3

let anfn = function () {
    console.log("i am  getting as paramter inside the setinterval");
};
setInterval(anfn, 1000);