function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}
Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.speak = function () {
    console.log("speak");
};
Robot.prototype.makeCoffee = function () {
    console.log("make coffee");
};
Robot.prototype.blinkLights = function () {
    console.log("blink lights");
};
var robby = new Robot("Robby", "Dr. Morbius", 1956);
var rosie = new Robot("Rosie", "George Jetson", 1962);
robby.onOffSwitch = true;
robby.makeCoffee = function () {
    console.log("make coffee starbucks");
};
rosie.cleanHouse = function () {
    console.log("clean house");
};
console.log(
    robby.name +
        " was made by " +
        robby.maker +
        " in " +
        robby.year +
        " and is owned by " +
        robby.owner
);
robby.makeCoffee();
robby.blinkLights();
console.log(
    rosie.name +
        " was made by " +
        rosie.maker +
        " in " +
        rosie.year +
        " and is owned by " +
        rosie.owner
);
rosie.cleanHouse();
