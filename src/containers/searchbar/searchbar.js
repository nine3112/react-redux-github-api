import React, {Component} from 'react';
import './searchbar.scss';
import UserGithubAPI from '../../apis/user'

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

            let actions = {
                type: "LOADUSER_SUCCESS",
                payload: {
                    show_profile: {
                        show: true,
                        data: json
                    }
                }
            }
            if (json == "Not Found"){
                console.log("TEST : ", json)
                actions = {
                    type: "LOADUSER_FAIL",
                    payload: {
                        show_profile: {
                            show: false,
                            data: {}
                        }
                    }
                }
            }
            this
                .props
                .github(actions);
        })
    }
    listRepo = () => {
        this.dispatchReload()
        this.dispatchRepo()
    }
    dispatchRepo = () => {
        const rtn = UserGithubAPI.listRepo(this.props.show_profile.data.login);
        rtn.then(json => {
            console.log("TEST : ", json)
            let actions = {
                type: "LOADREPO_SUCCESS",
                payload: {
                    show_repo: {
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
                                <div className="title">
                                    Github Search
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
                                                    placeholder="Text input"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="subtitle">
                                    <button className={"button is-danger" + Reload} type="submit">Search</button>
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
                                            <div className="image img-center">
                                                <img
                                                    src={this.props.show_profile.data.avatar_url}
                                                    alt="Profile"
                                                    className="image"
                                                    data-target="modal-image2"/>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="content">
                                                <h4>{this.props.show_profile.data.name}
                                                    ({this.props.show_profile.data.login})</h4>
                                                <p></p>
                                                <span
                                                    onClick={this.listRepo}
                                                    className={"button is-link modal-button " + Reload}
                                                    data-target="modal-image2">ดูรายละเอียด</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
}
                    </div>
                </form>
                <div class="notification is-danger">
  <button class="delete"></button>
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
  consectetur adipiscing elit
</div>
            </React.Fragment>
        )
    }
}

export default Searchbar;