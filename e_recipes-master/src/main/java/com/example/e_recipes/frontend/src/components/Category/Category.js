import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import RecipeThumbnail from "../Recipe/RecipeThumbnail";


export class Category extends Component{

    constructor(props){
        super(props);
    }

    state = {
        category: '',
        recipes: []
    }


    componentDidMount() {

        axios.get("http://localhost:8080/categories/"+this.props.match.params.id).then(response => {
            this.setState({
                category: response.data
            });
        });
        axios.get("http://localhost:8080/recipes/category/"+this.props.match.params.id).then(response => {
            this.setState({
                recipes: response.data
            });
        });
    }

    render(){
        return (
            <div>
                <h5 className="text-center">
                    {this.state.category.name}
                </h5>
                <div className="inline-block row">
                        {this.state.recipes.map((recipe,index) => (
                            <RecipeThumbnail id={recipe.id} key={index} recipe={recipe}
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
export default Category;