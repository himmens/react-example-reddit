import React, {Component} from "react";
import {connect} from "react-redux";
import "./App.css";
import * as topicsSelectors from './store/topics/reducer';
import TopicsScreen from './containers/TopicsScreen';
import PostsScreen from './containers/PostsScreen';

class App extends Component {
    render() {
        return (
            <div className="App">
                {!this.props.isSelectionFinalized ?
                    <TopicsScreen /> :
                    <PostsScreen />
                }
            </div>
        );
    }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
    return {
        isSelectionFinalized: topicsSelectors.isTopicSelectionFinalized(state)
    };
}

export default connect(mapStateToProps)(App);