import React from 'react';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";

class ListView extends React.Component {
    render() {
        return <div>

            <h2>TODO: Display list of animes here</h2>

            <div className="text-center btn-container">
                <Link to="/add" className="btn btn-outline-light btn-lg custom-btn clickable">Add anime</Link>
            </div>
        </div>
    }
}

export default withRouter(ListView);
