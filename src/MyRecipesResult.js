function MyRecipesResult({label, calories, image, ingredients}) {
    return(
        <div className="container">
            <h2>{label}</h2>
            <h3>{calories.toFixed()} calories</h3>
            <img src={image} alt="food_pic"/>
            <ul>
                {ingredients.map(item =>(
                    <li>✔️ {item}</li>
                ))}
            </ul>
        </div>
    )
}

export default MyRecipesResult; 