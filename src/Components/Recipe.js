import React, { useEffect } from 'react';
import  './style.css';
import { useState } from 'react';
// import { useEffect } from 'react';
import RecipeItem from './RecipeItem';
import RecipeAlpha from './RecipeAlpha'; 

const Recipe=()=>{
    // const[recipe, setRecipe]= useState("")
    const [meals, setMeals]= useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

    useEffect(()=>{
        fetch(meals).then(respose=>respose.json()).then(data=>{
            setMeals(data.meals);
        })
    },[meals])


    return(
        <>
            <div className='header'>
                <div className='header-container'>
                    <h1>Yummy_Food Recipes</h1>
                    <h4>“Cooking demands attention, patience, and above all, a respect for the gifts of the earth. It is a form of worship, a way of giving thanks.”</h4>
                </div>
                <div>
                    <input type="search" className="search-input" placeholder="search..."/>
                </div>
                <div className="recipe-list">
                    <RecipeItem/>
                    <RecipeItem/>
                    <RecipeItem/>
                    <RecipeItem/>
                    <RecipeItem/>
                    
                </div>
                <div className="LetterBox">
                    <RecipeAlpha/>   
                </div>
            </div>

        </>
    )
}
export default Recipe;