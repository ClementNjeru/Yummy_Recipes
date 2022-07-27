import React, { useEffect } from 'react';
import  './style.css';
import { useState } from 'react';
// import { useEffect } from 'react';
import RecipeItem from './RecipeItem';
import RecipeAlpha from './RecipeAlpha'; 

const Recipe=()=>{
    const[data, setData]= useState([]);
    const [meals, setMeals]= useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [show, setShow]= useState(false);
    const [search, setSearch]= useState("");

    useEffect(()=>{
        fetch(meals)
        .then(res=>res.json())
        .then(data=>setData(data.meals));
        // console.log(meals);
        setShow(true);

    },[meals])
    // console.log(data);
    const setIndex=(alpha) =>{
    
        setMeals(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe=(event) =>{
        if (event.key==="Enter"){
            setMeals(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}
            `)
        }
    }


    return(
        <>
            <div className='header'>
                <div className='header-container'>
                    <h1>Yummy_Food Recipes</h1>
                    <h4>“Cooking demands attention, patience, and above all, a respect for the gifts of the earth. It is a form of worship, a way of giving thanks.”</h4>
                </div>
                <div>
                    <input type="search" className="search-input" placeholder="search..." onChange ={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
                </div>
                <div className="recipe-list">
                    
                    {
                        show ? <RecipeItem data={data}/>: "Not Found"
                    }
                </div>
                <div className="LetterBox">
                    <RecipeAlpha alphaIndex={(alpha)=> setIndex(alpha)}/>   
                </div>
            </div>

        </>
    )
}
export default Recipe;