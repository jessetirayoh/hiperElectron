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

// Sends the XMLCommand to HiperService
function loadXMLCommand() {
  
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