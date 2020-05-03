IllusionApp.getColor = function(index) {
    return IllusionApp.activeColorModel[index];
}

IllusionApp.switchColorModel = function() {
    if(IllusionApp.activeColorModelIndex >= IllusionApp.MAX_COLOR_MODELS) {
        IllusionApp.activeColorModelIndex = 0;
    }
    IllusionApp.activeColorModel = IllusionApp.colorModels[IllusionApp.activeColorModelIndex++];
}

IllusionApp.getActiveColorModel = function() {
    return (IllusionApp.activeColorModel || IllusionApp.defaultColorModel);
}

IllusionApp.updateProgression = function() {
    var isFlagReset = false;
    if(IllusionApp.activeColorIndex < 0) {
        IllusionApp.activeColorIndex = 0;
        IllusionApp.Flags.REVERSE = false;
        isFlagReset = true;
    }
    if(IllusionApp.activeColorIndex > 20) {
        IllusionApp.activeColorIndex = 20;
        IllusionApp.Flags.REVERSE = true;
        isFlagReset = true;
    }
    if(isFlagReset && (IllusionApp.activeMode === IllusionApp.Modes.MULTIPLE_TRANSITION)) {
        IllusionApp.switchColorModel();
    }
}

IllusionApp.start = function(mode) {
    IllusionApp.StackManager.push("#illusion-window");
    switch(mode) {
        case IllusionApp.Modes.SINGLE_TRANSITION:
            IllusionApp.activeMode = IllusionApp.Modes.SINGLE_TRANSITION;
            IllusionApp.Operations.SINGLE_TRANSITION();
            break;
        case IllusionApp.Modes.MULTIPLE_TRANSITION:
            IllusionApp.activeMode = IllusionApp.Modes.MULTIPLE_TRANSITION;
            IllusionApp.Operations.MULTIPLE_TRANSITION();
            break;
        case IllusionApp.Modes.TORCH:
            IllusionApp.activeMode = IllusionApp.Modes.TORCH;
            IllusionApp.Operations.TORCH();
            break;
        case IllusionApp.Modes.PARTY:
            IllusionApp.activeMode = IllusionApp.Modes.PARTY;
            IllusionApp.Operations.PARTY();
            break;
        default:
            IllusionApp.StackManager.pop();
    }
}

