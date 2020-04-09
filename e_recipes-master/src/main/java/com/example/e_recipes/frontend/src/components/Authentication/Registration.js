import React,{Component} from 'react'
import qs from "qs";
import axios from 'axios';
import {Redirect} from "react-router";
import FormErrors from "../FormErrors/FormErrors";


export default class Registration extends Component{
    constructor(props){
        super(props)

        this.state={
            userName: '',
            password: '',
            email:'',
            registered:false,

            formErrors: {name: '',amount: ''},
            emailValid:false,
            usernameValid:false,
            passwordValid:false,
            formValid:false
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e){
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.length >= 1;
                fieldValidationErrors.email = emailValid ? '' : 'Внеси е-маил';
                break;
            case 'userName':
                usernameValid = value.length >= 1;
                fieldValidationErrors.userName = usernameValid ? '': 'Внеси корисничко име';
                break;
            case 'password':
                passwordValid = value.length >=1;
                fieldValidationErrors.password = passwordValid ? '': 'Внеси пасворд';
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            usernameValid: usernameValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.usernameValid && this.state.emailValid && this.state.passwordValid});
    }
    submitForm(e){
        e.preventDefault()
        const {userName, password,email} = this.state
        const newUser = {
            userName,
            password,
            email
        }
        const params = qs.stringify(newUser);
        axios.post("http://localhost:8080/users/add", params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => this.setState({registered:true}))

    }
    render(){
        if(this.state.registered){
            alert("Успешна регистрација!")
            return (
                <Redirect to="/recipes"/>
            )
        }
        return(
            <div className="align-content-center">
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <h2>Регистрирај се</h2>
                <div className="container col-sm-4">
                    <form onSubmit={this.submitForm} className="p-3">
                        <div className="row m-2">
                            <div className="col-sm-2">
                                <i className="fa fa-envelope"/>
                            </div>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder="E-mail" name="email" value={this.state.email} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-sm-2">
                                <i className="fa fa-user"/>
                            </div>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder="Корисничко име" name="userName" value={this.state.userName} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-sm-2">
                                <i className="fa fa-key"/>
                            </div>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" placeholder="Лозинка" name="password" value={this.state.password} onChange={this.onChange}/>
                            </div>
                        </div>
                        <button type="submit"  disabled={!this.state.formValid} className="btn-primary btn-block">Регистрирај се</button>
                    </form>
                </div>
            </div>
        )

    }
}
