$(document).ready(() => {

    $("#expand").click((e) => {
        e.preventDefault();
        window.resizeTo(screen.availWidth, screen.availHeight)
    })

    $("#minimize").click((e) => {
        e.preventDefault();
        alert("Clicked minimize!")
        window.minimize();
    })

    $("#close").click((e) => {
        e.preventDefault();
        window.close()
    })

    $("#chat").click((e) => {
        e.preventDefault();
        alert('clicked!');
        $("#bubble").load("chat.html");
        $("#bubble").removeClass("d-flex");
        $("#bubble").removeClass("justify-content-center");
        $("#bubble").removeClass("align-items-center");
        $("#chat_window").height(0);
    })
})