import React, {Component} from 'react';
import UserGithubAPI from '../../apis/user'
import {Centerimg} from './searchbar_style'
import * as Scroll from 'react-scroll';
import * as dis from '../../redux/actions/github'
let scroll = Scroll.animateScroll;

class Searchbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text_search: ''
        }
    }
    setsearch = (event) => {
        this.setState({text_search: event.target.value})
    }
    search = (e) => {
        this.dispatchSearch()
        e.preventDefault();
    }
    dispatchSearch = () => {
        this
            .props
            .github(dis.loadUser(this.state.text_search));
        this.dispatchReload();
        this.dispatchShowProfile();
    }
    dispatchReload = () => {
        this
            .props
            .github(dis.Reload(true));
    }
    dispatchShowProfile = () => {
        const rtn = UserGithubAPI.searchUser(this.state.text_search);
        rtn.then(json => {
            if (json && json.error_bool) {
                this
                    .props
                    .github(dis.loadUserFail());
            } else {
                this
                    .props
                    .github(dis.loadUserSuccess(json));
            }
            scroll.scrollToBottom();
        })
    }
    listRepo = () => {
        this.dispatchReload()
        this.dispatchRepo()
    }
    dispatchRepo = () => {
        const rtn = UserGithubAPI.listRepo(this.props.show_profile.data.login, "1");
        rtn.then(json => {
            if (json && json.length > 0) {
                this
                    .props
                    .github(dis.loadRepoSuccess(json));
            } else {
                this
                    .props
                    .github(dis.loadRepoFail());
            }
            scroll.scrollTo(1000);
        });
    }
    Reload = (beforeString) => {
        const rtn = beforeString + (this.props.reload)
            ? "is-loading"
            : ""
        return rtn
    }
    render() {
        let Reload = '';
        if (this.props.reload) {
            Reload += ' is-loading';
        }
        return (
            <React.Fragment>
                <form onSubmit={this.search}>
                    <section className="hero is-info is-small">
                        <div className="hero-body">
                            <div className="container has-text-centered">
                                <div className="title">
                                    Github search
                                </div>
                                <div className="subtitle">
                                    <div className="columns is-mobile is-centered">
                                        <div className="column is-4 ">
                                            <div className={"control" + Reload}>
                                                {this.props.reload}
                                                <input
                                                    onChange={this.setsearch}
                                                    className="input is-rounded"
                                                    type="text"
                                                    placeholder="User Github"
                                                    disabled={this.props.reload}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="subtitle">
                                    <button
                                        className={"button is-danger" + Reload}
                                        type="submit"
                                        disabled={this.props.reload}>Search</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="box cta">
                        {this.props.show_profile.show && <div className="columns is-mobile is-centered">
                            <div className="column is-5">
                                <div className="has-text-centered">
                                    <div className="card is-shady">
                                        <div className="card-image">
                                            <Centerimg>
                                                <div className="image ">
                                                    <img
                                                        src={this.props.show_profile.data.avatar_url}
                                                        alt="Profile"
                                                        className="image"
                                                        data-target="modal-image2"/>
                                                </div>
                                            </Centerimg>
                                        </div>
                                        <div className="card-content">
                                            <div className="content">
                                                <h4>
                                                    <a href={this.props.show_profile.data.html_url}>{this.props.show_profile.data.name}
                                                        ({this.props.show_profile.data.login})
                                                    </a>
                                                </h4>
                                                <p>
                                                    <a href={this.props.show_profile.data.html_url}>
                                                        {this.props.show_profile.data.html_url}
                                                    </a>
                                                </p>
                                                <p>Repository amount : {this.props.show_profile.data.public_repos}</p>
                                                <span
                                                    onClick={this.listRepo}
                                                    className={"button is-link modal-button " + Reload}
                                                    disabled={this.props.reload}>See Repository</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
}
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Searchbar;