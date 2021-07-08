import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'

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
            console.log(result)
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

        console.log(this.state)

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
              <div className="hero">
                <div className="container">
                  <div className="description">
                    <ReactMarkdown source={this.state.description} />
                  </div>
                  {/* <p className="description">{this.state.description}</p> */}
                </div>
              </div>
            )
        }
    }
}

export default Hero
