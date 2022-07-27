import React from "react";
const RecipeAlpha=({alphaIndex})=>{
    const alpha=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let num=0;
    return(
        <>
           {
            alpha.map(item=>{
                // console.log(item);
                return(
                    <div className="letter-cards" key={num++} onClick={()=>alphaIndex(item)}>
                        <h3>{item}</h3>
                    </div>
                )
            })
           }
        </>
    )
}

export default RecipeAlpha;
