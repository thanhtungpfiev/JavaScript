var fido = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls",
};

var bark;

if (fido.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}

var speak = fido.name + " says " + bark + " when he wants to " + fido.activity;
console.log(speak);
image.png