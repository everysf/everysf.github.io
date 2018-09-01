// Thank you for visiting.
// Let's work together:
// Kevin@everysf.com

var titlesArr = ["designer", "developer", "creative", "problem solver", "guitar player", "runner", "dad-joke teller"];

var state;

function showHome() {
    $(".landingWrap").css("animation", "1s blurIn")
    $(".resumeOverlay").css("top", "100%")
    $(".contactOverlay").css("top", "100%")
    $(".creativeOverlay").css("bottom", "100%")
    $(".technicalOverlay").css("bottom", "100%")
}

function showResume() {
    $(".nav2").css("animation", "1s blurIn")
    $(".resumeOverlay").css("top", "0")
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
    setInterval(
        function() {
            $("#title").text(titlesArr[i])
            i++
            if (i > titlesArr.length - 1) {
                i = 0}
        }, 2000)
    console.log("cycle")
}

$(".resume").on("click", function(){
    showHome()
    showResume()
})

$(".contact").on("click", function(){
    showHome()
    showContact()
})

$(".technical").on("click", function(){
    showHome()
    showTechnical()
})

$(".creative").on("click", function(){
    showHome()
    showCreative()
})

$(".backdrop").on("click", function(){
    showHome()
})

$(".linkedIn").on("click", function(){
    var url = "https://www.linkedin.com/in/sandiegokevin/"
    window.open(url)
})

var schidden

$("#music").on("click", function(){
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
    $(".entryText").css("animation", ".5s advance forwards")
    $(".entryModal").css("animation", ".5s advanceFadeOut forwards")
    cycleTitle()
})

$("#petPackage").on("click", function(){
    window.location.href =("https://everysf.github.io/pet-package/")
})

$("#gifTastico").on("click", function(){
    window.location.href =("https://everysf.github.io/gif-engine/")
})

function comingSoon() {
    var newDiv = $("<div>")
    newDiv.addClass("comingSoon")
    var soonModal = $("<div>")
    soonModal.addClass("soonModal")
    var newHeader = $("<h1>")
    newHeader.text("coming soon")
    newDiv.append(newHeader)
    $(".comingSoonBox").append(soonModal)
    $(".comingSoonBox").append(newDiv)
}

$(".comingSoonPrompt").on("click", function(){
    comingSoon()
})

$(".comingSoonBox").on("click", function(){
    $(".comingSoonBox").empty()
})

$(".backToHome").on("click", function(){
    window.location.href = ("https://everysf.github.io/")
})

console.log("Welcome to my site :).")
console.log("Shoot me an email if you'd like to work together.")
console.log("kevin@everysf.com")

// Pictures array

// var albumsArr = []

// function pushAlbums(){

//     for (var i = 1; i < 37; i++){

//         var k = i

//         if (k < 10) {
//             k = "0"+i
//         }
        
//         var albumURL = "img/albums/albums-" + k + ".png"

//         console.log(albumURL)

//         albumsArr.push(albumURL)

//     }

//     for (var j = 0; j < albumsArr.length; j++) {

//         var newThumb = $("<div>")
//         newThumb.addClass("jamFranciscoThumbnail")
//         newThumb.css("background-image", albumsArr[i])
//         $(".pictures").append(newThumb)

//     }
// }

// pushAlbums()