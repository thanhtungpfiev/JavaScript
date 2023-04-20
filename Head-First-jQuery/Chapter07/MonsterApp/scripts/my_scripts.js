$(document).ready(function () {
    goLightning();
    window.onblur = stopLightning;
    window.onfocus = goLightning;
    var int1, int2, int3;
    function goLightning() {
        int1 = setInterval(function () {
            lightning_one();
        }, 4000);
        int2 = setInterval(function () {
            lightning_two();
        }, 5000);
        int3 = setInterval(function () {
            lightning_three();
        }, 7000);
    }
    function stopLightning() {
        window.clearInterval(int1);
        window.clearInterval(int2);
        window.clearInterval(int3);
    }
    function lightning_one() {
        $("#container #lightning1").fadeIn(250).fadeOut(250);
    }
    function lightning_two() {
        $("#container #lightning2").fadeIn(250).fadeOut(250);
    }
    function lightning_three() {
        $("#container #lightning3").fadeIn(250).fadeOut(250);
    }

    var clix = [0, 0, 0, 0];
    $("#head").click(function () {
        moveMe(0, this);
    });
    $("#eyes").click(function () {
        moveMe(0, this);
    });
    $("#nose").click(function () {
        moveMe(0, this);
    });
    $("#mouth").click(function () {
        moveMe(0, this);
    });

    function moveMe(i, obj) {
        if (clix[i] < 9) {
            $(obj).animate({ left: "-=367px" }, 500);
            clix[i] += 1;
        } else {
            $(obj).animate({ left: "0px" }, 500);
            clix[i] = 0;
        }
    }

    var w = 367; //width of the face strip
    var m = 10; //number of the monster face strip we're on
    $("#btnRandom").click(randomize);
    $("#btnReset").click(reset);
    function getRandom(num) {
        var my_random_num = Math.floor(Math.random() * num);
        return my_random_num;
    }
    function randomize() {
        $(".face").each(function (index) {
            var target_position = getRandom(m);
            var current_position = clix[index];
            clix[index] = target_position;
            if (target_position > current_position) {
                var move_to = (target_position - current_position) * w;
                $(this).animate({ left: "-=" + move_to + "px" }, 500);
            } else if (target_position < current_position) {
                var move_to = (current_position - target_position) * w;
                $(this).animate({ left: "+=" + move_to + "px" }, 500);
            } else {
                // They are the same - Don't move it.
            }
        });
    }
    function reset() {
        $(".face").each(function (index, element) {
            $(this).animate({ left: "0px" }, 500);
            clix[index] = 0;
        });
    }
}); //end doc.onready function
