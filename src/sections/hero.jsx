import React from 'react';
import Markdown from 'markdown-to-jsx'

class Hero extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        description: '',
        videoUrl: ''
      };
    }
  
    componentDidMount() {
      fetch("https://quartier10h10-admin.herokuapp.com/hero")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              description: result.description,
              videoUrl: result.video.url
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
            return  (
              <div class="loader fadeIn">
                <img src="https://strapi-quartier-bucket.s3.eu-west-3.amazonaws.com/logo_quartier10h10_fd04f298b4.svg" />
              </div>);
        } else {
            return (
              <div className="hero fadeIn">
                <div className="video-container">
                  <video playsInline autoPlay muted loop>
                      <source src={this.state.videoUrl} type="video/mp4" />
                  </video>
                </div>
                <div className="container">
                  <Markdown options={{ wrapper: 'h1', forceWrapper: true }} className="description">{this.state.description}</Markdown>
                  {/* <p className="description">{this.state.description}</p> */}
                </div>
              </div>
            )
        }
    }
}

export default Hero
