$(function() {
    $(".nav-link").on("click", function() {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $("#portfolio").removeClass("d-none");
    });
});