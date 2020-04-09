import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";


export class Logout extends Component{

    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn= true
        if(token == null){
            loggedIn=false
        }

        this.state={
            loggedIn
        }
    }
    //componentWillUnmount() {
    //    localStorage.removeItem("token")
    //}

    render(){
        if(this.state.loggedIn === false){
            return (
                <div>
                    <h2>Не сте најавени</h2>
                    <Link to="/login">Најави се тука</Link>
                </div>
            )
        }
        return(
            <div>
                <h2>Одјавени сте</h2>
                <Link to="/recipes/">Врати се на почетна</Link>
            </div>
        )
    }

}

export default Logout;