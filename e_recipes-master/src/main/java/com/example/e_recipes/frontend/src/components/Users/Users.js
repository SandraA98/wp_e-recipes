import React, {Component} from 'react'
import User from "../User/User";

class Users extends Component{
    render(){
        return(
            <div>
                {this.props.users.map((user,index) =>(
                    <User id={user.id} key={index} user={user}
                    />))}
            </div>
        )
    }
}
export default Users;