import React, {Component} from 'react'
import Ingredient from "../Ingredient/Ingredient"
import {Link} from "react-router-dom";

class Ingredients extends Component {
    render() {

        return (
            <div>
                <div className="row">
                    <h4 className="text-upper text-left">Ingredients</h4>
                    <div className="table-responsive">
                        <table className="table tr-history table-striped small">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                {this.props.ingredients.map((ingredient,index) => (
                    <Ingredient id={ingredient.id} key={index} ingredient={ingredient}
                                onDelete={this.props.onDelete}
                    />))}
                <Link to="/ingredients/add">
                    <button className="btn btn-outline-secondary">
                        <span><strong>Add new ingredient</strong></span>
                    </button>
                </Link>
            </div>
        )
    }

}

export default Ingredients;