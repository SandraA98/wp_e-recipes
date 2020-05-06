import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../../App.css";

const Sidebar = (props) => {

        if(props.categories){
            return(
                <div>
                   <div className="list-group-item list-group-item-dark">Категории</div>
                    {props.categories.map((category,index) => (
                        <div className="list-group" key={category.id}>
                            <div className="list-group-item" key={category.id}>
                                <Link to={"/categories/" + category.id}>
                                    {category.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )
    }
}

export default Sidebar;
