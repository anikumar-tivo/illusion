var singleTransition = function() {
    var color;
    if(IllusionApp.Flags.REVERSE) {
        color = IllusionApp.getColor(IllusionApp.activeColorIndex);
        IllusionApp.activeColorIndex--;
    } else {
        color = IllusionApp.getColor(IllusionApp.activeColorIndex);
        IllusionApp.activeColorIndex++;
    }
    IllusionApp.updateProgression();

    document.getElementById("illusion-window").style.backgroundColor = color;
}

var start = function() {
    IllusionApp.activeColorModel = IllusionApp.defaultColorModel;
    IllusionApp.timer = setInterval(singleTransition, 80);
}

IllusionApp.Operations.SINGLE_TRANSITION = start;
