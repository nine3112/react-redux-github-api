import React, {Component} from 'react';
import Moment from 'react-moment';
import UserGithubAPI from '../../apis/user'
import * as Scroll from 'react-scroll';
let scroll = Scroll.animateScroll;
class Repo extends Component {

    loadMoreRepo = () => {
        this.dispatchReload()
        const rtn = UserGithubAPI.listRepo(this.props.show_profile.data.login, (this.props.show_repo.page + 1).toString());
        rtn.then(json => {
            let actions;
            if (json && json.length > 0) {
                let temp = [...this.props.show_repo.data]
                temp = temp.concat(json)
                console.log("RESULT : ", temp)
                actions = {
                    type: "LOADREPO_MORE_SUCCESS",
                    payload: {
                        show_repo: {
                            show: true,
                            data: temp,
                            page: this.props.show_repo.page + 1
                        }
                    }
                }
            } else {
                actions = {
                    type: "LOADREPO_FAIL",
                    payload: {
                        show_repo: {
                            show: false,
                            data: [],
                            page: 1
                        }
                    }
                }
            }
            this
                .props
                .github(actions);
            scroll.scrollMore(500);

        })
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
    render() {
        let Reload = '';
        if (this.props.reload) {
            Reload += ' is-loading';
        }
        return (
            <React.Fragment>
                {this.props.show_repo.show && <React.Fragment>
                    <section className="section">
                        <div className="container">
                            <div className="columns is-multiline">
                                {this.props.show_repo.data && this
                                    .props
                                    .show_repo
                                    .data
                                    .map((data) => (
                                        <div className="column is-one-third" key={data.id}>
                                            <div className="box">
                                                <article className="notification media has-background-white">
                                                    <figure className="media-left">
                                                        <span className="icon">
                                                            {/* <i className="has-text-warning fa fa-columns fa-lg"></i> */}
                                                        </span>
                                                    </figure>
                                                    <div className="media-content">
                                                        <div className="content">
                                                            <h1 className="title is-size-4">
                                                                <a href={data.html_url}>{data.name}</a>
                                                                <span className="tag is-warning">
                                                                    <Moment format="YYYY/MM/DD">{data.updated_at}</Moment>
                                                                </span>
                                                            </h1>
                                                            <div className="is-size-5 subtitle">
                                                                {data.description}
                                                            </div>
                                                            {data.language != null && <div className="is-size-5 subtitle">
                                                                <span className="tag is-info">{data.language}</span>
                                                            </div>
}
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            {this.props.show_repo.data && this.props.show_repo.data.length < this.props.show_profile.data.public_repos && <div className="content has-text-centered">
                                <div className="control level-item">
                                    <div className="tags has-addons">
                                        <button
                                            className={"button is-info" + Reload}
                                            type="submit"
                                            onClick={this.loadMoreRepo}
                                            disabled={this.props.reload}>Load more...</button>
                                    </div>
                                </div>
                            </div>
}
                        </div>
                    </section>

                    <div className="content has-text-centered">
                        <div className="control level-item">
                            <a href="https://github.com/dansup/bulma-templates">
                                <div className="tags has-addons">
                                    <span className="tag is-dark">Bulma Templates</span>
                                    <span className="tag is-info">MIT license</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </React.Fragment>
}
            </React.Fragment>
        )
    }
}
export default Repo;