import React, {Component} from 'react';
import {Link} from "react-router-dom";


export class Ingredient extends Component{
    render(){
        const {id,name,amount} = this.props.ingredient;

        return (
            <div>
                <ul>
                    <li style={{width: '130px'}}>
                        {this.props.ingredient.amount} {this.props.ingredient.name}
                    </li>
                </ul>
            </div>
        )
    }

}

export default Ingredient;