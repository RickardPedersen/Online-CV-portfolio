// Checks if user has any language option saved
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
        // I use the same key words in id:s for the navbar buttons and the
        // pages so that this eventlistener can be used for all navbar buttons.
        // education-button, education-page etc.
        $("#" + this.id.split("-")[0] + "-page").removeClass("d-none");
    });

    // Checks users saved language option
    if (language == "en") {
        $('body [lang="sv"]').addClass("d-none");
        $('body [lang="en"]').removeClass("d-none");
    }

    // Event listener for sv-button
    $(".sv-button").on("click", function () {
        // Saves language option in local storage
        language = this.value;
        localStorage.setItem("language", language);
        // Hides all elements with lang="en" attribute shows lang="sv" elements
        $('body [lang="en"]').addClass("d-none");
        $('body [lang="sv"]').removeClass("d-none");
    })

    // Event listener for en-button
    $(".en-button").on("click", function () {
        // Saves language option in local storage
        language = this.value;
        localStorage.setItem("language", language);
        // Hides all elements with lang="sv" attribute shows lang="en" elements
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
