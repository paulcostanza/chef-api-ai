import React from 'react'

export default function Main() {

    const [ingredients, setIngredient] = React.useState(["Chicken", "Oregano", "Tomatoes"])

    function addToList(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredient(prev => [...prev, newIngredient])

        console.log(formData)
    }

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <>
            <form action={addToList} className="add-ingredient-form">
                <input
                    aria-label="Add ingredient"
                    type="text"
                    placeholder="e.g. chicken broth"
                    name="ingredient"
                />
                <button>+ Add ingredient</button>
            </form>
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
        </>
    )
}