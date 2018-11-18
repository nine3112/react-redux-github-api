import React, {Component} from 'react';
import './searchbar.scss';
import UserGithubAPI from '../../apis/user'

class Searchbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text_search: '',
            loading: ''
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
        let actions = {
            type: "LOADUSER",
            payload: {
                SEARCH: this.state.text_search
            }
        }
        this
            .props
            .github(actions);
        this.dispatchReload();
        this.dispatchShowProfile();
    }
    dispatchReload = () => {
        let actions = {
            type: "RELOAD",
            payload: {
                reload: true
            }
        }
        this
            .props
            .github(actions);

    }
    dispatchShowProfile = () => {
        const rtn = UserGithubAPI.searchUser(this.state.text_search);
        rtn.then(json => {
            console.log("TEST : ", json)
            let actions = {
                type: "LOADUSER_SUCCESS",
                payload: {
                    show_profile: {
                        show: true,
                        data: json
                    }
                }
            }
            this
                .props
                .github(actions);
        })
    }
    Reload = (beforeString) => {
        const rtn = beforeString + (this.props.reload)
            ? "is-loading"
            : ""
        console.log(rtn)
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
                                <p className="title">
                                    Github Search
                                </p>
                                <p className="subtitle">
                                    <div className="columns is-mobile is-centered">
                                        <div className="column is-4 ">
                                            <div className={"control" + Reload}>
                                                {this.props.reload}
                                                <input
                                                    onChange={this.setsearch}
                                                    className="input is-rounded"
                                                    type="text"
                                                    placeholder="Text input"/>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                                <p className="subtitle">
                                    <button className="button is-danger" type="submit">Search</button>
                                </p>
                            </div>
                        </div>
                    </section>
                    <div className="box cta">
                        {(this.props.show_profile.show)
                            ? <div className="columns is-mobile is-centered">
                                    <div className="column is-5">
                                        <p className="has-text-centered">
                                            <div className="card is-shady">
                                                <div className="card-image">
                                                    <figure className="image img-center">
                                                        <img
                                                            src={this.props.show_profile.data.avatar_url}
                                                            alt="Placeholder image"
                                                            className="image"
                                                            data-target="modal-image2"/>
                                                    </figure>
                                                </div>
                                                <div className="card-content">
                                                    <div className="content">
                                                        <h4>{this.props.show_profile.data.name} ({this.props.show_profile.data.login})</h4>
                                                        <p></p>
                                                        <span className="button is-link modal-button" data-target="modal-image2">ดูรายละเอียด</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            : ""}
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Searchbar;