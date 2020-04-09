import React, {Component} from 'react';
import {Redirect} from "react-router";
import axios from "axios";
import FormErrors from "../FormErrors/FormErrors";
import {Link} from "react-router-dom";
import qs from "qs";
import AddIngredient from "../AddIngredient/AddIngredient";

export class AddRecipe extends Component{

    constructor(props) {
        super(props);

        this.state = {

            recipe:{},
            name: '',
            description: '',
            ingredients:[],
            ingIds:[],
            ingredientName:'',
            ingredientAmount:'',
            categories: [],
            selectedCategory: '',
            redirect: false,
            category:'',
            user:''
            }
            this.onChange = this.onChange.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }



    componentDidMount() {
        axios.get("http://localhost:8080/categories/") .then((response) => {
                let categoriesFromApi = response.data.map(category => {
                    return {value: category.id, display: category.name}
                });
                this.setState({
                    categories: [{value: '', display: '(Одбери категорија)'}].concat(categoriesFromApi)
                });
        });
        this.setState({user: this.props.match.params.id})
    }

    onChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    onSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state.user)
        this.props.addRecipe(this.state.name,this.state.description,this.state.selectedCategory,this.state.user);
        this.setState({redirect:true})
    }

    render(){
        const redirect = this.state.redirect;
        if(redirect){
            return <Redirect to={"/users/"+this.state.user}/>
        }
        return(
            <div className="container row">
                <div className="card col-8">
                <form onSubmit={this.onSubmit.bind(this)}>
                       <div className="card-title">
                           <h4 className="text-upper text-center">Додади нов рецепт</h4>
                       </div>
                       <div className="form-group">
                           <div className="form-row">
                               <div className="col-sm-2 text-left">
                                   <label htmlFor="name">Наслов на рецептот</label>
                               </div>
                               <div className="col-sm-10">
                                   <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange.bind(this)} />
                               </div>
                           </div>
                       </div>
                       <div className="form-group">
                           <div className="form-row">
                               <div className="col-sm-2 text-left">
                                   <label htmlFor="description">Опис</label>
                               </div>
                               <div className="col-sm-10">
                                   <textarea type="text" className="form-control" name="description" value={this.state.description} onChange={this.onChange.bind(this)}/>
                               </div>
                           </div>
                       </div>
                       <div className="form-group">
                           <div className="form-row">
                               <div className="col-sm-2 text-left">
                                   <label htmlFor="category">Категорија</label>
                               </div>
                               <select name="selectedCategory" value={this.state.selectedCategory}
                                       onChange={this.onChange.bind(this)} className="col-sm-10">
                                   {this.state.categories.map((category) =>
                                       <option key={category.value} value={category.value}>
                                           {category.display}
                                       </option>
                                   )}
                               </select>
                           </div>
                       </div>
                       <div className="form-row">
                           <div className="col-sm-3 offset-3 text-center">
                               <button type="submit" className="btn btn-primary text-upper">
                                   Додади
                               </button>
                           </div>
                           <div className="col-sm-3 text-center">
                               <button className="btn btn-danger text-upper">
                                   Откажи
                               </button>
                           </div>
                       </div>
                   </form>
                </div>
            </div>
        )
    }

}

export default AddRecipe;