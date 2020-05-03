var torch = function() {
    if(IllusionApp.activeColorModelIndex == 6) {
        IllusionApp.activeColorIndex = 0;
    } else {
        IllusionApp.activeColorIndex = 10;
    }
    var color = IllusionApp.getColor(IllusionApp.activeColorIndex);
    document.getElementById("illusion-window").style.backgroundColor = color;
}

var start = function() {
    IllusionApp.activeColorModel = IllusionApp.defaultColorModel;
    IllusionApp.timer = setInterval(torch, 80);
}

IllusionApp.Operations.TORCH = start;