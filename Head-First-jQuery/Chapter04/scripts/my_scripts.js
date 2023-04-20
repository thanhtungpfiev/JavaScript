$(document).ready(function () {
    var v = false;
    var $f, $m;
    $("#vegOn").click(function (e) {
        if (v == false) {
            v = true;
            $f = $(".fish").parent().parent().detach();
            $(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
            $(".meat").before("<li class='tofu'><em>Tofu</em></li>");
            $m = $(".meat").detach();
            $(".tofu").parent().parent().addClass("veg_leaf");
        }
    }); //end button

    $("#restoreMe").click(function (e) {
        if (v == true) {
            $(".menu_entrees li").first().before($f);
            $(".portobello").replaceWith("<li class='hamburger'>Hamburger</li>");
            $(".tofu").parent().parent().removeClass("veg_leaf");
            $(".tofu").each(function (i) {
                $(this).after($m[i]);
            });
            $(".tofu").remove();
            v = false;
        }
    }); //end button
}); //end document ready
