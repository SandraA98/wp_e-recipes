import React, {Component} from 'react'
import {Link,Route,Redirect} from 'react-router-dom'
import axios from 'axios';
import FormErrors from "../FormErrors/FormErrors";
import {User} from "../User/User";
import Users from "../App/App";
import Category from "../Categories/Categories";

export default class Login extends Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            userId: '',
            userName: '',
            password: '',
            loggedIn,
            userExists: false,
            passwordMatches: false,
            formErrors: {name: '', amount: ''},
            usernameValid: false,
            passwordValid: false,
            formValid: false

        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }

    onChange(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });

    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;
        //let userExists = this.state.userExists;
        //let passwordMatches = this.state.passwordMatches;


        switch (fieldName) {
            case 'userName':
                usernameValid = value.length >= 1;
                //userExists = this.state.userExists
                fieldValidationErrors.userName = usernameValid ? '' : 'Внеси корисничко име';
                //fieldValidationErrors.userName = userExists ? '': 'Корисничкото име не постои';
                break;
            case 'password':
                passwordValid = value.length >= 1;
                //passwordMatches = this.state.passwordMatches
                fieldValidationErrors.password = passwordValid ? '' : 'Внеси лозинка';
            //fieldValidationErrors.password = passwordMatches ? '': 'Лозинката е неточна';
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            usernameValid: usernameValid,
            passwordValid: passwordValid,
            //userExists: userExists,
            //passwordMatches: passwordMatches,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
    }

    submitForm(e) {
        e.preventDefault();

        this.setState({
            loggedIn: true
        });

        axios.get(`http://localhost:8080/users/${this.state.userName}/${this.state.password}`).then((response) => {
            if (response.data === true) {
                //console.log(response.data.id)
                this.setState({
                    passwordMatches: true,
                })
            } else {
                alert("Лозинката е неточна!")
            }
        });
        axios.get(`http://localhost:8080/users/name/${this.state.userName}`).then((response) => {
            if (response.data != null) {
                //console.log(response.data.id)
                this.setState({
                    userExists: true,
                    userId: response.data.id

                })
            } else {
                alert("Корисничкото име не постои!")
            }
        });
        localStorage.setItem("token", "token1")
    }

    render() {
        if(this.state.passwordMatches && this.state.userExists){
            return <Redirect to={"/users/"+this.state.userId}/>
        }
            return(
                <div className="align-content-center">
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors}/>
                    </div>
                    <h2>Најави се</h2>
                    <div className="container col-sm-4">
                        <form onSubmit={this.submitForm} className="p-3">
                            <div className="row m-2">
                                <div className="col-sm-2">
                                    <i className="fa fa-user"/>
                                </div>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" placeholder="Корисничко име" name="userName"
                                    value={this.state.userName} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-sm-2">
                                    <i className="fa fa-key"/>
                                </div>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" placeholder="Лозинка" name="password"
                                    value={this.state.password} onChange={this.onChange}/>
                                </div>
                            </div>
                            <button type="submit" disabled={!this.state.formValid} className="btn-primary btn-block">
                                Најави се
                            </button>

                        </form>
                    </div>
                </div>
            )
    }
}