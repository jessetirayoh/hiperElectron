// Test purposes to check if jquery is running
$(document).ready(function () {
    $("#hide").click(function () {
        $("h1").hide();
    });
});

$(document).ready(function () {
    $("#show").click(function () {
        $("h1").show();
    });
});

// Temporary clear button
// $("button").click(function () {
//     $("div").empty();
// });

// Sends the XMLCommand to HiperService
// function loadXMLCommand() {

//     var header = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><Commands>";
//     var openCmd = "<command type=\"open\"><name>Toyota 47.jpg.tif</name><id>image1</id></command>";
//     var footer = "</Commands>";
//     var xhttp = new XMLHttpRequest();

//     xhttp.addEventListener("readystatechange", function () {
//         if (this.readyState === 4) {
//             console.log(this.responseText);
//         }
//     });

//     xhttp.open("POST", "http://10.1.0.138:8000/xmlcommand", true);
//     xhttp.send(header + openCmd + footer);
// }

function allowDrop(evt) {
    evt.preventDefault();
    console.log("item being dragged to valid location...");
}

function drag(evt) {
    evt.dataTransfer.setData("key", evt.target.id);
    console.log("it's dragging...");
}

function drop(evt) {

    var data = evt.dataTransfer.getData("key");
    evt.preventDefault();
    evt.target.appendChild(document.getElementById(data));
    console.log("Item dropped");

    var header = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?><Commands>";
    var openCmd = "<command type=\"open\"><name>Toyota 47.jpg.tif</name><id>image1</id></command>";
    var footer = "</Commands>";
    var xhttp = new XMLHttpRequest();

    xhttp.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhttp.open("POST", "http://10.1.0.138:8000/xmlcommand", true);
    xhttp.send(header + openCmd + footer);
}

function clearWall() {

    $("button").click(function () {
        $("div").empty();
    });

    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "http://localhost:8000/clearall");
    xhr.send(data);
}