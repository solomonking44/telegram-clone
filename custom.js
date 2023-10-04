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
        $("#message").focus();
    })

    $("#message-form").on("submit", (e) => {
        e.preventDefault();
        alert("Form has been submitted");
        console.log("The work is done!");
    })



    // API BUSINESS
    // const express = require("express")
    // const app = express()

    // app.post('/send', (req, res) => {
    //     response = {
    //         name: req.body.message
    //     }

    //     // res.end(JSON.stringify(response))
    //     // res.send("POSTED!!!")
    //     res.end("POST")
    // })

    // app.listen(port, () => {
    //     console.log(`Application running on port ${port}`);
    // })

    // $("#message-form").submit(() => {
    //     e.preventDefault();
    //     console.log("Form submitted");
})