function makePassword(password) {
    return function (passwordGuess) {
        return passwordGuess === password;
    };
}

var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));

function multN(n) {
    return function (number) {
        return (n * number);
    };
}

var multBy3 = multN(3);
console.log("Multiplying 2: " + multBy3(2));
console.log("Multiplying 3: " + multBy3(3));


function makeCounter() {
    var count = 0;
    return {
        increment: function() {
            return ++count;
        }
    };
}

var counter = makeCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());