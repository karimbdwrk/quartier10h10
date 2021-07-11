import React from 'react';
import Markdown from 'markdown-to-jsx'

class Playlist extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        title: '',
        description: '',
        link: ''
      };
    }
  
    componentDidMount() {
      fetch("https://quartier10h10-admin.herokuapp.com/playlist")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              title: result.Title,
              description: result.Description,
              link: result.Spotify_Link
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
                <div className="playlist">
                    <div className="container">
                        <div className="txt">
                            <h2 className="title">{this.state.title}</h2>
                            <Markdown className="description">{this.state.description}</Markdown>
                        </div>
                        <div className="lecteur">
                            <iframe src={this.state.link} width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Playlist
