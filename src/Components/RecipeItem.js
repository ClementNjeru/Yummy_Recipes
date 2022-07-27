import React from "react";
const RecipeItem=({data})=>{
    console.log(data);
    return(
        <>  
            {
                (!data) ? "Not Found" : data.map(item => {
                    return (
                    <div className="recipe-item">
                        <img src={item.strMealThumb} alt="" />
                        <h3>{item.strMeal}</h3>
                    </div>
                    )
                })
            }
            
        </>
    )
}
export default RecipeItem;