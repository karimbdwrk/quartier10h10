import React, { Component } from 'react';

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
            console.log(result)
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

        console.log(this.state)

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <div className="manifesto">
                    <h2>{this.state.title}</h2>
                    <p className="description">{this.state.description}</p>
                    <p className="signature">{this.state.signature}</p>
                </div>
            )
        }
    }
}

export default Manifesto
