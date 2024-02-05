window.onresize = updateSize;
window.onload = updateSize;

function updateSize() {
    myWidth = window.innerWidth;
    document.querySelector(".size").innerHTML = "Width: " + myWidth + "px";
}


