//         FILTRE BARRE PRINCIPALE

const barreChamp = document.getElementById("barre_champ");


function filtreBarre() {
    const inputBarre = barreChamp.value;
    let query = "";

    const results = recipes.filter((recipe) => {
        return (
            recipe.name.toLowerCase().startsWith(query.toLowerCase()) ||
            recipe.description.toLowerCase().includes(query.toLowerCase()) ||
            recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(query.toLowerCase())));
    });

    barreChamp.addEventListener("input", filtreBarre);
};