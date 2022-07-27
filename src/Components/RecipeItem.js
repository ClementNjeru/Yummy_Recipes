import React from "react";

const RecipeItem=({data})=>{
    // console.log(data);

    return(
        <>  
            {
                (!data) ? "Not Found" : Object.keys(data).map((key) => {
                    // console.log(key);
                    return (
                    <div key={key} className="recipe-item" >
                        <img src={data[key].strMealThumb} alt=""/>
                        <h3>{data[key].strMeal}</h3>
                    </div>
                    )
                })
            }
            
        </>
    )
}
export default RecipeItem;