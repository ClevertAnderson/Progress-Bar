$(document).ready(function() {
    $("#btn33").click(function() {
        $(".progress-bar").css("width", "33%");
        $(".progress-bar").text("33%");
    })

    $("#btn66").click(function() {
        $(".progress-bar").css("width", "66%");
        $(".progress-bar").text("66%");
    })

    $("#btn100").click(function() {
        $(".progress-bar").css("width", "100%");
        $(".progress-bar").text("100%");
    })
})