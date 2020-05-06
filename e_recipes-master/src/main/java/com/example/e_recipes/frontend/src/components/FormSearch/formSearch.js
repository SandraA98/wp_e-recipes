import React from 'react';

const FormSearch = (props) => {

    const onSearch = (e)=>{
        e.preventDefault();
        props.onSearch(e.target["searchTerm"].value);
    }


    return (
            <form onSubmit={onSearch} className="form-inline mt-2 mt-md-0 mr-4">
                <input className="form-control mr-sm-2" name={"searchTerm"} type="text" placeholder="Пребарувај по состојка.." aria-label="Search"/>
                <button className="btn btn-success my-2 my-sm-0" type="submit"><span className="fa fa-search"/></button>
            </form>
    )
};
export default FormSearch;
