$("#newRecipe").submit(function() {
    let title = $("#newTitle").text();
    let diff = $("#newDifficulty").text();
    let desc = $("#newDesc").text();
    let steps = $("#newSteps").text();
    let recipe = {
        title, diff, desc, steps
    };
})