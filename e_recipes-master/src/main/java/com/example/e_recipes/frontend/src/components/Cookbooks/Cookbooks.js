import React from 'react'
import {Link} from "react-router-dom";

const Cookbooks = ({ cookbooks }) => {

    return cookbooks.map(cookbook => (
            <div key={cookbook.id}>
                <table className="table table-striped col-sm-10">
                    <tbody>
                    <tr>
                        <td className="text-left">
                            {cookbook.title}
                        </td>
                        <td className="text-right">
                            <Link to={"/cookbooks/" + cookbook.id}>
                                <button className="btn btn-sm btn-primary">
                                    <span><strong> Види повеќе</strong></span>
                                </button>
                            </Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            ))
}

export default Cookbooks