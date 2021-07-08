import React from 'react';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        logo: '',
        navigation: []
      };
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
                    <img src={this.state.logo} className="logo" />
                    <nav className="nav">
                        { this.state.navigation.Nav_Link.map((navlink, index) => {
                        return (
                            <a href={navlink.Link} key={index}>
                                {navlink.Title}
                            </a>
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
