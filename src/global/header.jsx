import React from 'react';
import { Link } from 'react-scroll'

function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.')
}

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        logo: '',
        navigation: [],
        toggleOpen: false
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
      fetch("https://quartier10h10-admin.herokuapp.com/header")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              logo: result.Logo.url,
              navigation: result.Navigation
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
                <header>
                  <div className="container">
                    <div className="logo">
                        <img src={this.state.logo} />
                        <button id="burger" onClick={this.handleClick} className={this.state.toggleOpen ? 'open' : ''}>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </button>
                    </div>
                    <nav className={this.state.toggleOpen ? 'nav open' : 'nav'}>
                        { this.state.navigation.Nav_Link.map((navlink, index) => {
                        return (
                              <Link key={index} to={navlink.Link} spy={true} smooth={true}>{navlink.Title}</Link>
                            )
                        }) 
                        }
                    </nav>
                  </div>
                </header>
            )
        }
    }
}

export default Header
