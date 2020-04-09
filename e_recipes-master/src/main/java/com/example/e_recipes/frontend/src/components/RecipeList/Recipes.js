import React, {Component} from 'react'
import {Link} from "react-router-dom";
import RecipeThumbnail from "../Recipe/RecipeThumbnail";

class Recipes extends Component {


    render() {

        if (this.props.recipes) {
            return (
                <div>
                    <h5 className="row pl-4">Најнови рецепти</h5>
                    <div className="inline-block row">
                    {this.props.recipes.map((recipe, index) => (
                        <RecipeThumbnail id={recipe.id} key={index} recipe={recipe}
                                />))}
                    </div>
                </div>
            )
        }
    }
}

export default Recipes;