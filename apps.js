console.log('it wroked')

function addition(num1, num2) {
    return (num1 + num2)
}
console.log(addition(3,5));
console.log(addition(-3,-6));
console.log(addition(7,3));

function hoursIntoSeconds(hours) {
    return hours *3600
}
console.log(hoursIntoSeconds (2));
console.log (hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));


function calcParimeter(length, width) {
    return(length*2 + width*2)
}
console.log(calcParimeter(6,7));
console.log(calcParimeter(20,10));
console.log(calcParimeter(2,9));


function calcTriangleArea(base,height){
    return 0.5 * base * height
}
console.log(calcTriangleArea(3,2));
console.log(calcTriangleArea(10,10));
console.log(calcTriangleArea(20,20));

function appendFrontend(firstWord){
    return firstWord + "Frontend" 
}
console.log(appendFrontend("Apple"));
console.log(appendFrontend("Banana"));
console.log(appendFrontend("Orange"));


function sumGreaterThan100(number1, number2){
    // if (number1 + number2 > 100) {
    //     return "true"
    // }
    // else { /*DONT NEED THIS LINE */
    //     return "false"
    // }
    return (number1 + number2 >= 100)
}
console.log(sumGreaterThan100(20,10));
console.log(sumGreaterThan100(50,60));
console.log(sumGreaterThan100(100,-50));

function lessThanOrEqualToZero(number){
    return number <= 0;
}
console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));


function oppositeBoolean(bool){
    return bool !=="true"
}

console.log(oppositeBoolean("true"));
console.log(oppositeBoolean("false"))

function isNotZero(numbers) {
    // if (numbers !==0){
    //     return "true"
    // }
    // else {
    //     return "false"
    // }
    return (numbers !== 0)
}
console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(null));

function calcRemainder (numm1, numm2){
    return numm1 % numm2;
}
console.log(calcRemainder(4,2));
console.log(calcRemainder(7,8));
console.log(calcRemainder(9,8));

function isOdd (numm){
    return numm % 2 !== 0;
}
console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));


function booleanInteger(nummm){
    // if (nummm % 2 === 0){
    //     return 1;
    // }
    // else {
    //     return -1;
    // }
   return (nummm % 2 === 0) ? 1 : -1 ; 
}
console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

function isLoggedInAndSubscribed(loggedIn, subscribed){
    // if (loggedIn === 'LOGGED_IN' && subscribed === 'SUBSCRIBED'){
    //     return true
    // }
    // else {
    //     return false
    // }
    return loggedIn === 'LOGGED_IN' && subscribed === 'SUBSCRIBED'
}
console.log (isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
console.log (isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
console.log (isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));

function LoggedInAndSubscribed(logIn, subs){
    // if (loggedIn === 'LOGGED_IN' || subscribed === 'SUBSCRIBED'){
    //     return true
    // }
    // else {
    //     return false
    // }
    return (logIn === 'LOGGED_IN') || (subs === 'SUBSCRIBED')
}
console.log (LoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
console.log (LoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
console.log (LoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));
console.log (LoggedInAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'));