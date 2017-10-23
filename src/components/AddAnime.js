import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {addAnime} from "../store/animeReducer";
import {connect} from "react-redux";

class AddAnime extends React.Component {

    // We use normal component state here, because no other component cares about data of these inputs
    state = {
        name: "",
        description: "",
        picture: ""
    };

    back = (e) => {
        this.props.history.push("/");
    };

    // Handles changes to our input fields
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return <form onSubmit={(e) => { e.preventDefault() }}>
            <div className="add-anime">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name"
                           required
                           className="form-control"
                           type="text"
                           name="name"
                           onChange={this.onChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input id="description"
                           className="form-control"
                           type="text"
                           name="description"
                           onChange={this.onChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="picture">Picture</label>
                    <input id="picture"
                           title="Kirjoita toimiva URL osoite"
                           pattern="^(http://|https://)+.*$"
                           className="form-control"
                           type="text"
                           name="picture"
                           onChange={this.onChange}
                    />
                </div>
            </div>

            <div className="text-center btn-container">
                <button type="submit" className="btn btn-outline-light btn-lg custom-btn clickable">Submit</button>
                <button className="btn btn-outline-light btn-lg custom-btn clickable"
                        onClick={this.back}>
                    Back
                </button>
            </div>
        </form>;
    }
}

export default withRouter(AddAnime);

