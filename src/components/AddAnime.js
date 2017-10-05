import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {addAnime} from "../store/animeReducer";
import {connect} from "react-redux";

class AddAnime extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            picture: ""
        }
    }

    submitAnime = (e) => {
        e.preventDefault();

        this.props.addAnime(this.state.name, this.state.description, this.state.picture);

        this.props.history.push("/");
    };

    back = (e) => {
        this.props.history.push("/");
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return <form onSubmit={this.submitAnime}>
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

const mapStateToProps = (state) => ({
    // state goes here
});

const mapDispatchToProps = {
    addAnime
};

const Container = connect(mapStateToProps, mapDispatchToProps)(AddAnime);
export default withRouter(Container);

