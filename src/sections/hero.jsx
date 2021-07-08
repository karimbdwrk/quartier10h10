import React from 'react';
import Markdown from 'markdown-to-jsx'

class Hero extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        description: ''
      };
    }
  
    componentDidMount() {
      fetch("https://quartier10h10-admin.herokuapp.com/hero")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              description: result.description
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
              <div className="hero">
                <div className="container">
                  <Markdown className="description">{this.state.description}</Markdown>
                  {/* <p className="description">{this.state.description}</p> */}
                </div>
              </div>
            )
        }
    }
}

export default Hero
