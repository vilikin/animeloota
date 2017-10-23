import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Counter from "./Counter";

class ListItem extends React.Component {

    increaseSeason = () => {

    };

    increaseEpisode = () => {

    };

    decreaseSeason = () => {

    };

    decreaseEpisode = () => {

    };

    render() {
        return <div className="list-item">
            <object className="pic" data={this.props.picture} type="image/png">
                <img className="pic" src="https://haltu.fi/site/gallery/2/DSC_1494.jpg"/>
            </object>
            <div>
                <h3>
                    {this.props.name}
                </h3>
            </div>

            <div className="counters">
                <Counter value={"S" + this.props.season}
                         onDecrease={this.decreaseSeason}
                         onIncrease={this.increaseSeason}/>
                <Counter value={"E" + this.props.episode}
                         onDecrease={this.decreaseEpisode}
                         onIncrease={this.increaseEpisode}/>
            </div>
        </div>
    }
}

export default withRouter(ListItem);
