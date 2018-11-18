/*
 src/App.js
*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import logo from './logo.svg';
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
                <pre>
       {
        JSON.stringify(this.props)
       }
       </pre>
                <Searchbar
                    github={this.props.github}
                    reload={this.props.redux.github.reload}
                    show_profile={this.props.redux.github.show_profile}/>
                <Repo/>
                <footer>
                    {/* <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <article className="notification media has-background-white">
                <figure className="media-left">
                  <span className="icon">
                    <i className="has-text-warning fa fa-columns fa-lg"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Columns</h1>
                    <p className="is-size-5 subtitle">
                      The power of <strong>Flexbox</strong> in a simple interface
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="notification has-background-white media">
                <figure className="media-left">
                  <span className="icon has-text-info">
                    <i className="fa fa-lg fa-wpforms"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Form</h1>
                    <p className="is-size-5 subtitle">
                      The indispensable <strong>form controls</strong>, designed for maximum clarity
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="notification has-background-white media">
                <figure className="media-left">
                  <span className="icon has-text-danger">
                    <i className="fa fa-lg fa-cubes"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Components</h1>
                    <p className="is-size-5 subtitle">
                      Advanced multi-part components with lots of possibilities
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="notification has-background-white media">
                <figure className="media-left">
                  <span className="icon has-text-grey">
                    <i className="fa fa-lg fa-cogs"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Modifiers</h1>
                    <p className="is-size-5 subtitle">
                      An <strong>easy-to-read</strong> naming system designed for humans
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="notification has-background-white media">
                <figure className="media-left">
                  <span className="icon has-text-primary">
                    <i className="fa fa-lg fa-superpowers"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Layout</h1>
                    <p className="is-size-5 subtitle">
                      Design the <strong>structure</strong> of your webpage with these CSS classes
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="notification has-background-white media">
                <figure className="media-left">
                  <span className="icon has-text-danger">
                    <i className="fa fa-lg fa-cube"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-4">Elements</h1>
                    <p className="is-size-5 subtitle">
                      Essential interface elements that only require a <strong>single CSS class</strong>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section> */}
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
                </footer>
                <div id="modal-card" className="modal modal-fx-3dSlit">
                    <div className="modal-background"></div>
                    <div className="modal-content is-tiny">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img
                                                src="http://www.radfaces.com/images/avatars/linda-barret.jpg"
                                                alt="linda barret avatar"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">Jane Doe</p>
                                        <p className="subtitle is-6">@jane_doe</p>
                                    </div>
                                </div>
                                <div className="content">
                                    Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm tellin' you way up
                                    north bookin' it can't get theyah from heeyah native bean suppah whawf Powrtland
                                    Museum of Aht, back woods hawsun around the pit mummah Yessah, mummah muckle
                                    riyht on'ta her Bean's dinnahbucket bub geez bud sumpin' fierce ayuhpawt Bangah
                                    naw, Powrtland Museum of Aht down cellah sumpin' fierce hoppa bub If you can't
                                    stand the wintah you don't deserve the summah slower than molasses going uphill
                                    in January. Sgn'wahl shoggor hrii uaaah R'lyeh uh'e k'yarnak Hastur hupadgh
                                    li'hee, hai f'nilgh'ri nilgh'ri n'ghftor ngftaghu vulgtlagln h'hrii throd
                                    Nyarlathotep lloig, naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog
                                    cehye. Zhro y'hah nogoth phlegeth stell'bsna orr'e ph'Hastur gnaiih throd, uln
                                    ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg nakadishtu chlirgh hupadgh
                                    tharanak h'gnaiih.
                                    <a>@bulmaio</a>.
                                    <a href="#">#css</a>
                                    <a href="#">#responsive</a>
                                    <br/>
                                    <time datetime="2018-02-02">12:45 AM - 20 June 2018</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="modal-close is-large" aria-label="close"></button>
                </div>
                <div id="modal-card2" className="modal modal-fx-3dSlit">
                    <div className="modal-background"></div>
                    <div className="modal-content is-tiny">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="https://source.unsplash.com/hLyd1LukQ7E" alt="butterfly"/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img
                                                src="http://www.radfaces.com/images/avatars/linda-barret.jpg"
                                                alt="linda barret avatar"/>
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">Jane Doe</p>
                                        <p className="subtitle is-6">@jane_doe</p>
                                    </div>
                                </div>
                                <div className="content">
                                    Laum Ipsum junkah potatoes bookin' it. Moosetown rig up I'm tellin' you way up
                                    north bookin' it can't get theyah from heeyah native bean suppah whawf Powrtland
                                    Museum of Aht, back woods hawsun around the pit mummah Yessah, mummah muckle
                                    riyht on'ta her Bean's dinnahbucket bub geez bud sumpin' fierce ayuhpawt Bangah
                                    naw, Powrtland Museum of Aht down cellah sumpin' fierce hoppa bub If you can't
                                    stand the wintah you don't deserve the summah slower than molasses going uphill
                                    in January. Sgn'wahl shoggor hrii uaaah R'lyeh uh'e k'yarnak Hastur hupadgh
                                    li'hee, hai f'nilgh'ri nilgh'ri n'ghftor ngftaghu vulgtlagln h'hrii throd
                                    Nyarlathotep lloig, naflsll'ha nnnsll'ha athg y-ebunma goka chtenff ehyeog
                                    cehye. Zhro y'hah nogoth phlegeth stell'bsna orr'e ph'Hastur gnaiih throd, uln
                                    ya lw'nafh mg nar'luh li'hee wgah'n, sgn'wahl mg nakadishtu chlirgh hupadgh
                                    tharanak h'gnaiih.
                                    <a>@bulmaio</a>.
                                    <a href="#">#css</a>
                                    <a href="#">#responsive</a>
                                    <br/>
                                    <time datetime="2018-02-02">12:45 AM - 20 May 2018</time>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="modal-close is-large" aria-label="close"></button>
                </div>
                <div id="modal-image2" className="modal modal-fx-3dSlit">
                    <div className="modal-background"></div>
                    <div className="modal-content is-huge is-image">
                        <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="image"/>
                    </div>
                    <button className="modal-close is-large" aria-label="close"></button>
                </div>
                <div id="modal-image4" className="modal modal-fx-3dSlit">
                    <div className="modal-background"></div>
                    <div className="modal-content is-huge is-image">
                        <img src="https://source.unsplash.com/hLyd1LukQ7E" alt="butterfly"/>
                    </div>
                    <button className="modal-close is-large" aria-label="close"></button>
                </div>
                <div id="modal-image" className="modal modal-fx-superScaled">
                    <div className="modal-background"></div>
                    <div className="modal-content  is-image">
                        <img src="https://i.imgsafe.org/ba/baa924a5e3.png" alt="Placeholder image"/>
                    </div>
                    <button className="modal-close is-large" aria-label="close"></button>
                </div>
            </React.Fragment>
        //  <div className="App">   <header className="App-header">    <img src={logo}
        // className="App-logo" alt="logo" />    <h1 className="App-title">Welcome to
        // React</h1>    <pre>     {       JSON.stringify(this.props)     }     </pre>
        // </header>   <p className="App-intro">    To get started, edit
        // <code>src/App.js</code> and save to reload   </p>   <button
        // onClick={this.simpleAction}>Test redux action</button>  </div>
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