import React, {Component} from 'react';
import './App.css';
import Recipes from "../RecipeList/Recipes";
import {Link,Switch, BrowserRouter as Router,Redirect,Route} from 'react-router-dom'
import axios from 'axios';
import qs from 'qs';
import Header from '../Header/header';
import AddRecipe from "../AddRecipe/AddRecipe";
import Cookbook from "../Cookbook/Cookbook";
import Cookbooks from "../Cookbooks/Cookbooks";
import Checkout from '../Checkout/Checkout';
import Sidebar from '../Sidebar/Sidebar';
import Category from "../Category/Category";
import RecipeDetails from "../Recipe/RecipeDetails";
import AddIngredient from "../AddIngredient/AddIngredient";
import Login from "../Authentication/Login";
import Logout from "../Authentication/Logout";
import Registration from "../Authentication/Registration";
import User from "../User/User";
import CalCalculator from "../CalCalculator/CalCalculator";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            newRecipes:[],
            categories: [],
            cookbooks: [],
            ingredients: [],
            users: [],
            selectedCookbook: null
        }
    }

    componentDidMount() {

        axios.get("http://localhost:8080/recipes/")
            .then(response => this.setState({recipes: response.data}))
        axios.get("http://localhost:8080/categories/")
            .then(response => this.setState({categories: response.data}))
        axios.get("http://localhost:8080/cookbooks/")
            .then(response => this.setState({cookbooks: response.data}))
        axios.get("http://localhost:8080/users/")
            .then(response => this.setState({users: response.data}))
    }


    addRecipe = (name,description,categoryId,userId) => {
        const newRecipe = {
            name,
            description,
            categoryId,
            userId
        }
        const recipe = qs.stringify(newRecipe)

        axios.post("http://localhost:8080/recipes/add",recipe,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        )
            .then((response) => {
                    this.setState({
                        recipes:[...this.state.recipes,response.data]})
            })
            .catch((error) => {
                // Error 😨
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })
    }



    searchData = (searchTerm) => {
        axios.get(`http://localhost:8080/recipes?ingredient=${searchTerm}`).then((response)=>{
            this.setState({
                recipes: response.data,
            })
        })
    }


    render() {

        return (
            <div className="App">
                <Router>
                    <Header onSearch={this.searchData} users={this.state.users}/>
                    <div className="container-fluid row">
                        <div className="col-md-10 mt-4">
                            <Route path={"/recipes"} exact render={() =>
                                <Recipes recipes={this.state.recipes}
                                />
                            }>
                            </Route>
                            <Route path={"/recipes/user/:id/add"} render={(props)=>
                                <AddRecipe {...props} addRecipe={this.addRecipe}/>}>
                            </Route>
                            <Route path={"/recipes/:id/details"} component={RecipeDetails}>
                            </Route>
                            <Route path={"/recipes/:id/addIngredients"} render={(props) =>
                            <AddIngredient {...props}/>}>
                            </Route>
                            <Route path={"/cookbooks/"} exact render={()=>
                                <Cookbooks cookbooks={this.state.cookbooks}/>}>
                            </Route>
                            <Route path={"/cookbooks/:id"} component={Cookbook}>
                            </Route>
                            <Route path={"/calculator"} component={CalCalculator}>
                            </Route>
                            <Route path={"/checkout"} component={Checkout}/>
                            <Route path={"/login"} exact render={()=>
                                <Login users={this.state.users}/>}/>
                            <Route path={"/register"} component={Registration}/>
                            <Route path={"/logout"} component={Logout}/>
                            <Route path={"/categories/:id"} render={(props) =>
                                <Category {...props}/>}/>
                            <Route exact path={"/users/:id"} render={(props) =>
                                <User {...props} onDelete={this.deleteRecipe} recipes={this.state.recipes}/>}/>
                            <Redirect to={"/recipes"}/>
                        </div>
                        <div className="col-md-2 inline-block">
                            <Sidebar categories={this.state.categories} users={this.state.users}/>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;
