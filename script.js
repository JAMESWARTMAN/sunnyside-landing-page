function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//NEW NAVBAR

// function reactiveTopNav() {
//     const topNav = document.getElementById("myTopnav");

//     topNav.classList.contains("responsive") ?
//         topNav.classList.remove("responsive") :
//         topNav.classList.add("responsive");
// }
// window.onscroll = function() {
//     stickyTopNav();
// };

// var navbar = document.getElementById("myTopnav");
// var sticky = navbar.offsetTop;

// function stickyTopNav() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
//