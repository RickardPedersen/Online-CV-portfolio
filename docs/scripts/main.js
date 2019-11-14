$(function() {
    //Navbar links

    //Landing
    $("#landing-button").on("click", function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".pages").addClass("d-none");
        $("#landing").removeClass("d-none");
    });

    //About
    $("#about-button").on("click", function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".pages").addClass("d-none");
        $("#about").removeClass("d-none");
    });

    //Education
    $("#education-button").on("click", function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".pages").addClass("d-none");
        $("#education").removeClass("d-none");
    });

    //Work
    $("#work-button").on("click", function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".pages").addClass("d-none");
        $("#work").removeClass("d-none");
    });

    //Portfolio
    $("#portfolio-button").on("click", function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".pages").addClass("d-none");
        $("#portfolio").removeClass("d-none");
    });
});