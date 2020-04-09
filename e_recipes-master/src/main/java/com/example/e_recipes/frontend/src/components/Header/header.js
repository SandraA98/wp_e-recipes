import React from 'react';
import FormSearch from "../FormSearch/formSearch";
import {Link} from "react-router-dom";

const Header = (props) => {
    if(props.users) {
        return (
            <header className="mb-3">
                <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                    <a className="navbar-brand" href="/recipes/">Рецепти</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/cookbooks/"}>Книги со рецепти</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Додади рецепт</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li>
                                <FormSearch onSearch={props.onSearch}/>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-primary mr-2" to={"/register"}>Регистрација</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-success mr-2" to={"/login"}>Најава</Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" btn btn-outline-info" to={"/logout"}>Одјава</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;