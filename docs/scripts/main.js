let language = localStorage.getItem('language');

if (language == null) {
    language = "sv";
}

$(function () {
    /*Navbar*/
    // Adds eventlisteners for navigation in the navbar
    $(".navbar-brand, .navbar-nav > .nav-link").on("click", function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".pages").addClass("d-none");
        $("#" + this.id.split("-")[0] + "-page").removeClass("d-none");
    });

    // Checks users language option in localstorage 
    if (language == "en") {
        $('body [lang="sv"]').addClass("d-none");
        $('body [lang="en"]').removeClass("d-none");
    }

    // Event listener for sv-button
    $("#sv-button").on("click", function () {
        language = this.value;
        localStorage.setItem("language", language);
        $('body [lang="en"]').addClass("d-none");
        $('body [lang="sv"]').removeClass("d-none");
    })

    // Event listener for en-button
    $("#en-button").on("click", function () {
        language = this.value;
        localStorage.setItem("language", language);
        $('body [lang="sv"]').addClass("d-none");
        $('body [lang="en"]').removeClass("d-none");
    })

    /*Education page*/
    // Accordion event listeners
    $(".accordion .card").on("click", function () {
        // Slide down/up effect
        $(this).children(".collapse").slideToggle(250);
        // Flips the arrow icon
        $(this).find("img").toggleClass("flipImage");
    });
});
