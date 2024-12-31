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
            <ul>
                {ingredientsListItems}
            </ul>
        </>
    )
}