import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';


class Cookbook extends Component{

    constructor(props){
        super(props);
    }

    state = {
        cookbook: ''
    }

    componentDidMount() {
        axios.get("http://localhost:8080/cookbooks/"+this.props.match.params.id).then(response => {
            this.setState({
                cookbook: response.data
            });
        });
    }
    render(){

        return(
            <div className>
            <div className="table-responsive col-sm-6">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Наслов</th>
                        <th>Цена</th>
                        <th>Купи</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-left">
                                {this.state.cookbook.title}
                            </td>
                            <td className="">
                                {this.state.cookbook.price}ден
                            </td>
                            <td className="">
                                <Link to={"/checkout"}>
                                    <button className="btn btn-sm btn-success">
                                        <span className="fa fa-shopping-cart"/>
                                        <span><strong> Нарачај</strong></span>
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
                <div className="float-left m-4">
                    <Link to="/cookbooks/"><span className="fa fa-arrow-left"/> Назад</Link>
                </div>
            </div>
        )
    }

}

export default Cookbook;