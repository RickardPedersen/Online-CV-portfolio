$(function () {
    /*Navbar*/
    //Adds eventlisteners for navigation in the navbar
    $(".navbar-brand, .nav-link").on("click", function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
        $(".pages").addClass("d-none");
        $("#" + this.id.split("-")[0] + "-page").removeClass("d-none");
    });
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
        $(this).find(".octicon").toggleClass("flipImage");
    });
    /*End of education page*/

    /*Work page*/
    /*End of work page*/
});
