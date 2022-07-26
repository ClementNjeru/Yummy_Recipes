import React from 'react';
import  './style.css';
import RecipeItem from './RecipeItem';

function Recipe (){
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
                </div>
            
            </div>

        </>
    )
}
export default Recipe;