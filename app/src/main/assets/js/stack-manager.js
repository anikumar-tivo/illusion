IllusionApp.StackManager.push = function(id) {
    $(IllusionApp.Stack.stack[IllusionApp.Stack.tos]).hide();
    IllusionApp.Stack.stack.push(id);
    IllusionApp.Stack.tos++;
    $(id).show();
}

IllusionApp.StackManager.pop = function() {
    if(IllusionApp.Stack.tos == 0) {
        IllusionApp.Controls.stop();
    }
    clearInterval(IllusionApp.timer);
    var value = IllusionApp.Stack.stack.pop();
    IllusionApp.Stack.tos--;
    $(value).hide();
    $(IllusionApp.Stack.stack[IllusionApp.Stack.tos]).show();
}