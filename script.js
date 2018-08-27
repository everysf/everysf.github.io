// Thank you for visiting.
// Let's work together:
// Kevin@everysf.com

// Intialize Parallax.js
// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);

var titlesArr = ["designer", "developer", "creative", "problem solver", "guitar player", "runner", "dad-joke teller"];

var state;

function hideHome() {
    $(".nav").css("animation", "1s blurOut")
    $(".landingWrap").css("animation", "1s blurOut")
    $(".nav").addClass("blurred")
    $(".landingWrap").addClass("blurred")
}

function showNav() {
    $(".nav2").css("animation", "1s blurIn")
    $(".resumeOverlay").css("top", "0")
}

function showHome() {
    $(".nav").css("animation", "1s blurIn")
    $(".landingWrap").css("animation", "1s blurIn")
    $(".nav").removeClass("blurred")
    $(".landingWrap").removeClass("blurred")
}

function hideNav() {
    $(".nav2").css("animation", "1s blurOut")
    $(".resumeOverlay").css("top", "100%")
    $(".contactOverlay").css("top", "100%")
    $(".technicalOverlay").css("bottom", "100%")
    $(".creativeOverlay").css("bottom", "100%")
}

function showContact() {
    $(".nav2").css("animation", "1s blurIn")
    $(".contactOverlay").css("top", "0")
}

function showTechnical() {
    $(".nav2").css("animation", "1s blurIn")
    $(".technicalOverlay").css("bottom", "0")
}

function showCreative() {
    $(".nav2").css("animation", "1s blurIn")
    $(".creativeOverlay").css("bottom", "0")
}

function cycleTitle() {
    var i = 1;
    var changeTitle = setInterval(
        function() {
            $("#title").text(titlesArr[i])
            i++
            if (i > titlesArr.length - 1) {
                i = 0}
        }, 2000)
}

$(".resume").on("click", function(){
    hideHome()
    showNav()
})

$(".contact").on("click", function(){
    hideHome()
    showContact()
})

$(".technical").on("click", function(){
    hideHome()
    showTechnical()
})

$(".creative").on("click", function(){
    hideHome()
    showCreative()
})

$(".back").on("click", function(){
    hideNav()
    showHome()
})

$(".linkedIn").on("click", function(){
    var url = "https://www.linkedin.com/in/sandiegokevin/"
    window.open(url)
})

var schidden

$("#musicThumb").on("click", function(){
    $(".soundcloud").css("right", "0")
    schidden = false
})

$(".soundcloudhide").on("click", function(){
    if (schidden === false) {
        $(".soundcloud").css("right", "-200px")
        $(".soundcloudhide").html("show<br>music")
        schidden = true
    } else {
        $(".soundcloud").css("right", "0")
        $(".soundcloudhide").html("hide")
        schidden = false
    }
})

$(".advance").on("click", function(){
    $(".landingWrap").show()
    $(".entryModal").css("animation", ".5s advance forwards")
    cycleTitle()
})

console.log("Welcome to my site :).")
console.log("Shoot me an email if you'd like to work together.")
console.log("kevin@everysf.com")