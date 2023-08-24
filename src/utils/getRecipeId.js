export default function getRecipeId(recipe) {
    const uri = recipe.recipe.uri;
    const splitUri = uri.split("recipe_");
    if (splitUri.length > 1) {
        return splitUri[1];
    } else {
        throw new Error('Could not extract id from recipe uri ' + uri);
    }
}