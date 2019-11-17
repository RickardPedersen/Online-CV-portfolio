let language = localStorage.getItem('language');

if (language == null) {
    language = "sv";
}

$(function () {
    /*Navbar*/
    //Adds eventlisteners for navigation in the navbar
    $(".navbar-brand, .navbar-nav > .nav-link").on("click", function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".pages").addClass("d-none");
        $("#" + this.id.split("-")[0] + "-page").removeClass("d-none");
    });

    if (language == "en") {
        $('body [lang="sv"]').addClass("d-none");
        $('body [lang="en"]').removeClass("d-none");
    }

    $("#sv-button").on("click", function () {
        language = this.value;
        localStorage.setItem("language", language);
        $('body [lang="en"]').addClass("d-none");
        $('body [lang="sv"]').removeClass("d-none");
    })

    $("#en-button").on("click", function () {
        language = this.value;
        localStorage.setItem("language", language);
        $('body [lang="sv"]').addClass("d-none");
        $('body [lang="en"]').removeClass("d-none");
    })
    /*End of navbar*/

    /*Landing page*/
    /*End of landing page*/

    /*About page page*/
    /*End of about page*/

    /*Education page*/
    //Accordion event listeners
    $(".accordion .card").on("click", function () {
        //Slide down/up effect
        $(this).children(".collapse").slideToggle(250);
        //Flips the arrow icon
        $(this).find("img").toggleClass("flipImage");
    });
    /*End of education page*/

    /*Work page*/
    /*End of work page*/
});