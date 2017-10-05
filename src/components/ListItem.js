import React from 'react';

class ListItem extends React.Component {
    render() {
        return <div className="list-item">
            <img className="pic" src={this.props.picture}/>
            <div className="title">{this.props.name}</div>
        </div>
    }
}

export default ListItem;
