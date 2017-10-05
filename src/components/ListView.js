import React from 'react';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import ListItem from "./ListItem";

// ------------------------------------------------------
// The actual component
// ------------------------------------------------------

class ListView extends React.Component {
    render() {
        return <div>
            {
                this.props.animes.map(anime => (
                    <ListItem key={anime.id} {...anime}/>
                ))
            }
            <div className="text-center btn-container">
                <Link to="/add" className="btn btn-outline-light btn-lg custom-btn clickable">Add anime</Link>
            </div>
        </div>
    }
}

// ------------------------------------------------------
// Redux things below...
// ------------------------------------------------------

const mapStateToProps = (state) => ({
    animes: state.animes
});

const mapDispatchToProps = {
    // actions go here
};

const Container = connect(mapStateToProps, mapDispatchToProps)(ListView);
export default withRouter(Container);
