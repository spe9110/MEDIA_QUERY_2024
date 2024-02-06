window.onresize = updateSize;
window.onload = updateSize;

function updateSize() {
    myWidth = window.innerWidth;
    document.getElementById("size").innerHTML = "Width: " + myWidth + "px";
}


