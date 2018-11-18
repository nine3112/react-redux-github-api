import React, {Component} from 'react';
class Repo extends Component {
    // simpleAction = (event) => {     console.log("TEST", this.props)     const
    // actions = {         type: "SEARCH",         payload: {             SEARCH:
    // "TEST SEARCH"         }     }     this.props.github(actions); }
    render() {
        return (
            <React.Fragment>
                <section className="container">
                    <div className="columns features">
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://source.unsplash.com/RWnpyGtY1aU"
                                            alt="Placeholder image"
                                            className="modal-button"
                                            data-target="modal-image2"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Click on image above</h4>
                                        <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit
                                            massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis.
                                            Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                                        <span className="button is-link modal-button" data-target="modal-image2">Image modal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Tempor orci dapibus ultrices in.</h4>
                                        <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit
                                            pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis
                                            in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem sed
                                            risus.</p>
                                        <span className="button is-link modal-button" data-target="modal-card">Modal Card</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4 modal-button" data-target="modal-image">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://i.imgsafe.org/ba/baa924a5e3.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Click anywhere on card</h4>
                                        <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci
                                            nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget
                                            nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        <span className="button is-link modal-button" data-target="modal-image">Image modal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns features">
                        <div className="column is-4 modal-button" data-target="modal-card">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://i.imgsafe.org/3f/3f0c578f9d.jpeg" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h4>Click anywhere on card to
                                            <br/>expand into modal card
                                        </h4>
                                        <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit
                                            massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis.
                                            Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                                        <span className="button is-link modal-button">Modal card</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="card is-shady">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img
                                            src="https://source.unsplash.com/hLyd1LukQ7E"
                                            alt="butterfly image"
                                            className="modal-button"
                                            data-target="modal-image4"/>
                                    </figure>
                                </div>
                                <div className="card-content  modal-button" data-target="modal-card2">
                                    <div className="content">
                                        <h4>Click anywhere on card to
                                            <br/>expand into modal card - header image expands into bigger image</h4>
                                        <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit
                                            massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis.</p>
                                        <span className="button is-link modal-button">Modal card</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Repo;