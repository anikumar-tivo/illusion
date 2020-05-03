var party = function() {
    IllusionApp.activeColorModelIndex = Math.floor(Math.random() * 10) % 7
    IllusionApp.activeColorIndex = Math.floor(Math.random() * 100) % 21
    IllusionApp.activeColorModel = IllusionApp.colorModels[IllusionApp.activeColorModelIndex];
    var color = IllusionApp.getColor(IllusionApp.activeColorIndex);
    document.getElementById("illusion-window").style.backgroundColor = color;
}

var start = function() {
    IllusionApp.activeColorModel = IllusionApp.defaultColorModel;
    IllusionApp.timer = setInterval(party, 80);
}

IllusionApp.Operations.PARTY = start;