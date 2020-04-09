import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import axios from "axios";

export class User extends Component{

    constructor(props){
        super(props);
    }

    state = {
        user: '',
        userRecipes: this.props.recipes
    }

    componentDidMount() {
        //console.log(this.props.id);

        axios.get("http://localhost:8080/users/"+this.props.match.params.id).then(response => {
            //console.log(response.data.id)
            this.setState({
                user: response.data
            });
        });
        axios.get("http://localhost:8080/recipes/user/"+this.props.match.params.id).then(response => {
            this.setState({
                userRecipes: response.data
            });
        });
    }


    deleteRecipe = (id) => {
        axios.delete(`http://localhost:8080/recipes/delete/${id}`)
            .then(response => this.setState({
                userRecipes:
                    [...this.state.userRecipes.filter(recipe => recipe.id !== id)]
            }));
    }

    render(){
        return (
            <div className="container-fluid">
               {/* <h5 className="text-left">
                    {this.state.user.userName}
                </h5>*/}
                <Link to={"/recipes/user/"+this.state.user.id+"/add"}>
                    <button className="btn btn-success float-right">
                        <span><strong>Додади нов рецепт</strong></span>
                    </button>
                </Link>
                <h5 className="row">Рецепти креирани од &nbsp;<span  className="font-weight-bold">{this.state.user.userName}</span></h5>
                <div className="row inline-block">
                    {this.state.userRecipes.map((recipe,index) => (
                        <Recipe id={recipe.id} key={index} recipe={recipe} onDelete={this.deleteRecipe}
                        />))
                    }
                </div>
                <div className="float-left m-4">
                    <Link to="/recipes/"><span className="fa fa-arrow-left"/> Назад</Link>
                </div>
            </div>
        )
    }

}
export default User;