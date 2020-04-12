import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Ingredient from "../Ingredient/Ingredient";
import axios from 'axios';


export class RecipeDetails extends Component{

    constructor(props){
        super(props);
    }

    state = {
        recipe:{
            name:'',
            description:'',
            date:'',
            category:'',
            ingredients: [{
                name: '',
                amount: ''
            }],
            user:{
                userName:''
            }
        },
        ingredients:[]
    }

    componentDidMount() {
        axios.get("http://localhost:8080/recipes/"+this.props.match.params.id).then( response => {
                this.setState({
                    recipe: response.data
                });
            }
        )
        axios.get("http://localhost:8080/ingredients/recipe/"+this.props.match.params.id).then( response => {
                this.setState({
                    ingredients: response.data
                });
            }
        )
    }

    render() {

        return (
                <div className="container-fluid">
                    <div className="col-sm-10">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">
                                    {this.state.recipe.name}
                                </h3>
                                <h4 className="card-subtitle mb-2 font-italic text-primary">
                                    {this.state.recipe.category.name}
                                </h4>
                                <p className="card-text">
                                    <div className="text-left"><span className="font-weight-bold">Потребни состојки:</span>
                                    {this.state.ingredients.map((ingredient, index) => (
                                        <Ingredient id={ingredient.id} key={index} ingredient={ingredient}
                                        />)
                                    )}
                                    </div>
                                    <div className="text-left">
                                        <span className="font-weight-bold">Инструкции: <br/></span>
                                        {this.state.recipe.description}
                                    </div>
                                </p>
                            </div>
                            <div className="card-footer text-muted">
                                <div className="row">
                                    <span className="font-italic"> Објавен на:&nbsp;</span> {this.state.recipe.date}
                                </div>
                                <div className="row text-left">
                                    <span className="font-italic">Автор:&nbsp;</span> {this.state.recipe.user.userName}
                                    <div className="ml-auto mb-auto">
                                        <a href="#" className="btn btn-outline-danger m-1" title="Додади во омилени">
                                            <i className="fa fa-heart"></i>
                                        </a>
                                        <a href="https://www.facebook.com/" className="btn btn-outline-primary m-1" title="Сподели на facebook">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a href="https://www.twitter.com/" className="btn btn-outline-primary m-1" title="Сподели на twitter">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default RecipeDetails;