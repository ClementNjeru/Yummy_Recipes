import React from "react";
const RecipeItem=({data})=>{
    console.log(data);
    return(
        <>  
            {
                (!data) ? "Not Found" : data.map(data => {
                    return (
                    <div className="recipe-item">
                        <img src={data.strMealThumb} alt="" />
                        <h3>{data.strMeal}</h3>
                    </div>
                    )
                })
            }
            
        </>
    )
}
export default RecipeItem;