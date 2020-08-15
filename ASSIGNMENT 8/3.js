//case-1
/**
 * all the statement arec blocking is nature
 * the logic of program is synchronus
 * real-time example:---queue of ticket counter as in cinimahall
 */
function example1() {
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
    console.log("6");
    console.log("7");
}
example1()

//case-2

function example2() {
    console.log("1");
    console.log("2");
    console.log("3");
    //non blocking statement
    setInterval(() => {
        console.log("3.I am callback");
    }, 2000);
    console.log("4");
    console.log("5");
    console.log("6");
    console.log("7");
}
example2()

//case-3

function example3() {
    console.log("1");
    console.log("2");
    console.log("3");
    //non blocking statement
    setInterval(() => {
        console.log("3.  I am callback", new date());
    }, 2000);
    console.log("4");
    console.log("5");
    console.log("6");
    console.log("7");
}
example3()


//case-4

function example4() {
    console.log("1");
    console.log("2");
    console.log("3");
    //non blocking statement
    setTimeout(() => {
        console.log("1.  I am callback function", new date());
    }, 10);
    console.log("4");
    console.log("5");
    console.log("6");
    console.log("7");
}
example4()