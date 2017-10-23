import React from 'react'
import {Provider} from 'react-redux'
import PageLayout from "../layouts/PageLayout";

import {Route, Switch, BrowserRouter} from "react-router-dom"
import ListView from "./ListView";
import AddAnime from "./AddAnime";

class App extends React.Component {
    render() {
        return <Provider store={this.props.store}>
            <BrowserRouter>
                <PageLayout>
                    <Switch>
                        <Route exact path="/" component={ListView}/>
                        <Route path="/add" component={AddAnime}/>
                    </Switch>
                </PageLayout>
            </BrowserRouter>
        </Provider>;
    }
}

export default App;
