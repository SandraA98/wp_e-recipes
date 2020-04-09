import React, {Component} from 'react';
import {Redirect} from "react-router";
import FormErrors from "../FormErrors/FormErrors";
import axios from "axios";
import qs from "qs";
import {Link} from "react-router-dom";

export class AddIngredient extends Component{

    constructor(props) {
        super(props);

        this.state = {

            recipeId:'',
            name:'',
            amount:'',
            ingredients:[],
            recipe: {
                name: '',
                description: '',
                date: '',
                category: '',
                ingredients: [{
                    name: '',
                    amount: ''
                }],
                user: {
                    userName: ''
                }
            },
            formErrors: {name: '', amount: ''},
            nameValid: false,
            amountValid: false,
            formValid: false,
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/recipes/"+this.props.match.params.id).then( response => {
                this.setState({
                    recipe: response.data,
                    recipeId: this.props.match.params.id
                });
            }
        )
    }

    onClick = (e) => {
        e.preventDefault();

        //this.props.addIngredient(this.state.recipe.ingredients.name,this.state.recipe.ingredients.amount,this.state.recipe.id);
        const name = this.state.name;
        const amount = this.state.amount;
        const recipeId = this.state.recipeId;

        console.log(name)

        const newIng = {
                name,
                amount,
                recipeId
            }
            const params = qs.stringify(newIng);
            axios.post("http://localhost:8080/ingredients/add", params,{
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                }
            }).then(response =>
                this.setState({
                    ingredients: [...this.state.ingredients, response.data],
                    name: '',
                    amount: ''
                })

            )
    }

    onChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let amountValid = this.state.amountValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.length >= 1;
                fieldValidationErrors.name = nameValid ? '' : 'cannot be empty';
                break;
            case 'amount':
                amountValid = value.length >= 1;
                fieldValidationErrors.amount = amountValid ? '': 'cannot be empty';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            nameValid: nameValid,
            amountValid: amountValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.nameValid && this.state.amountValid});
    }


    render(){
        return(
            <div className="row">
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <form>
                <div className="form-group">
                    <h4 className="text-upper text-center">Додади состојка</h4>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Име</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="amount" className="col-sm-4 offset-sm-1 text-left">Количина</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" name="amount" value={this.state.amount} onChange={this.onChange}/>
                        </div>
                    </div>

                    <div className="form-group row offset-sm-1">
                        <div className="offset-sm-1 col-sm-3  text-center">
                            <button
                                type="submit"
                                onClick={this.onClick}
                                className="btn btn-primary"
                                disabled={!this.state.formValid}>
                                Додади
                            </button>
                        </div>
                        <div className="offset-sm-1 col-sm-3  text-center">
                                <Link to={"/recipes/"+this.state.recipeId+"/details"}>
                                    <button
                                        className="btn btn-primary">
                                        Крај
                                    </button>
                                </Link>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        )
    }

}

export default AddIngredient;