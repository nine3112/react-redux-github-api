import React, {Component} from 'react';

class Repo extends Component {
    // simpleAction = (event) => {     console.log("TEST", this.props)     const
    // actions = {         type: "SEARCH",         payload: {             SEARCH:
    // "TEST SEARCH"         }     }     this.props.github(actions); }
    render() {
        return (
            <React.Fragment>
            {this.props.show_repo.show && 
            <React.Fragment>
                <section className="section">
                    <div className="container">
                        <div className="columns is-multiline">
                        {this.props.show_repo.data && this.props.show_repo.data.map((data) => (
                            <div className="column is-one-third" key={data.id}>
                                <article className="notification media has-background-white">
                                    <figure className="media-left">
                                        <span className="icon">
                                            <i className="has-text-warning fa fa-columns fa-lg"></i>
                                        </span>
                                    </figure>
                                    <div className="media-content">
                                        <div className="content">
                                            <h1 className="title is-size-4">{data.name}</h1>
                                            <p className="is-size-5 subtitle">
                                                {data.language}
                                            </p>
                                        </div>
                                    </div>
                                </article>
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
                {/* </footer> */}
                </React.Fragment>
        )
    }
}
export default Repo;