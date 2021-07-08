import React from 'react';
import Markdown from 'markdown-to-jsx'

class Manifesto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        title: '',
        description: '',
        signature: ''
      };
    }
  
    componentDidMount() {
      fetch("https://quartier10h10-admin.herokuapp.com/mentale")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              title: result.title,
              description: result.description,
              signature: result.signature
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
              <div className="manifesto">
                <div className="container">
                    <h2 className="title">{this.state.title}</h2>
                    <Markdown className="description">{this.state.description}</Markdown>
                    <p className="signature">{this.state.signature}</p>
                </div>
              </div>
            )
        }
    }
}

export default Manifesto
