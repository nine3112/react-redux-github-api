import React, {Component} from 'react';
import {connect} from 'react-redux';
import {github} from './redux/actions/github'
import Searchbar from './containers/searchbar/searchbar'
import Repo from './containers/repo/repo'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/bulma.min.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <ToastContainer/>
                    <Searchbar
                        github={this.props.github}
                        reload={this.props.redux.github.reload}
                        show_profile={this.props.redux.github.show_profile}/>
                </div>
                <div>
                    <Repo
                        reload={this.props.redux.github.reload}
                        github={this.props.github}
                        show_repo={this.props.redux.github.show_repo}
                        show_profile={this.props.redux.github.show_profile}/>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return state
}
const mapDispatchToProps = dispatch => ({
    github: (actions) => dispatch(github(actions))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);