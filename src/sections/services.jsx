import React from 'react';
import Markdown from 'markdown-to-jsx'

class Services extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        title: '',
        description: '',
        skills: []
      };
    }
  
    componentDidMount() {
      fetch("https://quartier10h10-admin.herokuapp.com/competences")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              title: result.Title,
              description: result.Description,
              skills: result.Skills
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
                <div id="skills" className="services">
                    <div className="container">
                        <h2 className="title">{this.state.title}</h2>
                        <Markdown className="description">{this.state.description}</Markdown>
                        <div className="skills">
                            {this.state.skills.Skill.map((skill) => 
                                <div className="skill" key={skill.id}>
                                    <div className="icon-container">
                                        <img className="icon" src={skill.Icon.url} />
                                    </div>
                                    <div className="txt-container">
                                        <h3>{skill.Title}</h3>
                                        <Markdown className="description">{skill.Description}</Markdown>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Services
