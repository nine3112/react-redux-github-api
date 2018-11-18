/*
 src/App.js
*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {github} from './redux/actions/github'
import Searchbar from './containers/searchbar/searchbar'
import Repo from './containers/repo/repo'
import './App.css';
class App extends Component {
    simpleAction = (event) => {
        console.log("TEST", this.props)
        const actions = {
            type: "SEARCH",
            payload: {
                SEARCH: "TEST SEARCH"
            }
        }
        this
            .props
            .github(actions);
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <Searchbar
                        github={this.props.github}
                        reload={this.props.redux.github.reload}
                        show_profile={this.props.redux.github.show_profile}/>
                </div>
                <div>
                    <Repo show_repo={this.props.redux.github.show_repo}/>
                </div>
            </React.Fragment>
        );
    }
}
// const mapStateToProps = github => ({   ...github  })
function mapStateToProps(state) {
    return state
}
const mapDispatchToProps = dispatch => ({
    github: (actions) => dispatch(github(actions))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);