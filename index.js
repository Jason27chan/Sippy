$(function() {
    $("#newRecipe").click(function() {
        let title = $("#newTitle").text();
        let diff = $("#newDiff").text();
        let desc = $("#newDesc").text();
        let steps = $("#newSteps").text();
        let recipe = {
            title, diff, desc, steps
        };
        console.log(recipe);
    });
});