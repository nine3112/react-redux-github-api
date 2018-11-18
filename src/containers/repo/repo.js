import React, {Component} from 'react';
import Moment from 'react-moment';
class Repo extends Component {
    render() {
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