import React, {Component} from 'react'
import Category from '../Category/Category';

class Categories extends Component {
    render() {

        return (
            <div>
                {this.props.categories.map((category,index) => (
                    <Category id={category.id} key={index} category={category}
                    />))}
            </div>
        )
    }

}

export default Categories;