import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Ingredient from "../Ingredient/Ingredient";


export class RecipeThumbnail extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const {id, name, description, date, category, user, ingredients} = this.props.recipe;

        if (this.props.recipe) {
            return (
                <div className="col-sm-3 mt-2">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">
                                {this.props.recipe.name}
                            </h5>
                            <p className="card-text text-muted font-italic">
                                {this.props.recipe.date}
                            </p>
                        </div>
                        <div className="card-footer">
                            <Link to={"/recipes/" + this.props.recipe.id + "/details"}>
                                <button className="btn btn-primary btn-block btn-sm">
                                    <strong>Види повеќе...</strong>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default RecipeThumbnail;