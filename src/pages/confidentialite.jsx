import React from 'react';

class Confidentialite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        title: '',
        slug: '',
        content: ''
      };
    }
  
    componentDidMount() {
      fetch("https://quartier10h10-admin.herokuapp.com/confidentialite")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                isLoaded: true,
                title: result.Title,
                slug: result.slug,
                content: result.Content
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
        console.log()
        return (
            <div id="confidentialite" className="confidentialite">
                <div className="container">
                    <h2 className="title">{this.state.title}</h2>
                </div>
            </div>
        );
    }
}
 
export default Confidentialite;