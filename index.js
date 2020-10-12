$(function() {
    $("#newRecipe").click(function() {
        let title = $("#newTitle").val();
        let diff = $("#newDiff").val();
        let desc = $("#newDesc").val();
        let steps = $("#newSteps").val();
        let recipe = {
            title, diff, desc, steps
        };
        console.log(recipe);
    });
});