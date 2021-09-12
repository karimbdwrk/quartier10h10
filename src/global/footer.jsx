import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.')
}

class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        logo: '',
        socials: [],
        legalLinks: []
      };

      // Cette liaison est nécéssaire afin de permettre
      // l'utilisation de `this` dans la fonction de rappel.
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(state => ({
        toggleOpen: !state.toggleOpen
      }));
    }
  
    componentDidMount() {
      fetch("https://quartier10h10-admin.herokuapp.com/footer")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              logo: result.logo.url,
              socials: result.social.socialLink,
              legalLinks: result.legal.link
            });

          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      
    }
  
    render() {

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <footer className="footer">
                  <div className="container">
                    <div className="logo">
                        <img src={this.state.logo} />
                    </div>
                    <div className="legal">
                        {this.state.legalLinks.map((link) => (
                            <Link to={link.Link}>{link.Title}</Link>
                        ))}
                    </div>
                    <div className="social-links">
                        {this.state.socials.map((social) => (
                            <a href={social.Link} target="_blank"><img src={social.icon.url} /></a>
                        ))}
                    </div>
                  </div>
                </footer>
            )
        }
    }
}

export default Footer
