/**
 * Helper script to generate images used for relative line numbers
 */

"use strict";


for (var i = 0; i < 999; i++) {

    console.log("Generating image: " + i.toString())
    var page = require('webpage').create();
    page.viewportSize = { width: 30, height: 20 };
    page.clipRect = { top: 0, left: 0, width: 30, height: 20 };
    page.content = '<html><body><script>window.numberToRender="' + i.toString() + '";</script><canvas id="surface"></canvas></body></html>';
    page.evaluate(function () {
        var el = document.getElementById("surface");
        var context = el.getContext("2d");
        var width = window.innerWidth;
        var height = window.innerHeight;

        var i = parseInt(window.numberToRender);

        if (i < 10) window.numberToRender = " " + window.numberToRender;
        if (i < 100)window.numberToRender = " " + window.numberToRender;
        context.font = "12px Consolas";
        context.fillStyle = "rgb(150, 150, 150)";
        context.fillText(window.numberToRender, 4, 14);

        document.body.style.backgroundColor = "transparent";
        document.body.style.margin = "0px";
    });

    var imagePath = "images/" + i.toString() + ".png";
    page.render(imagePath);
    console.log(imagePath);
}

phantom.exit();