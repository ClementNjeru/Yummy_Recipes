import React from "react";
const RecipeAlpha=()=>{
    const letters=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let num=0;
    return(
        <>
           {
            letters.map(item=>{
                return(
                    <div className="letter-cards" key={num++}>
                        <h3>{item}</h3>
                    </div>
                )
            })
           }
        </>
    )
}

export default RecipeAlpha;
