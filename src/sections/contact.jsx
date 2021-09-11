import React from 'react';
import Markdown from 'markdown-to-jsx'
import ContactForm from '../components/contact-form';

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        title: '',
        address: '',
        at: '',
        email: '',
        telephone: []
      };
    }
  
    componentDidMount() {
      fetch("https://quartier10h10-admin.herokuapp.com/contact")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              title: result.Title,
              address: result.address,
              at: result.at,
              email: result.Contacts.Email,
              telephone: result.Contacts.Telephone
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

        const telephone = this.state.telephone.map(tel => <p key={tel.id} className="telephone">{tel.Tel}</p>)

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <div className="contact">
                    <div className="container">
                        <h2 className="title">{this.state.title}</h2>
                        <div>
                            <div className="contact-form">
                              <ContactForm />
                            </div>
                            <div className="informations">
                                <div>
                                    <p className="name_logo">Quartier 10H10</p>
                                    <p className="at">chez {this.state.at}</p>
                                    <Markdown className="address">{this.state.address}</Markdown>
                                </div>
                                {/* <div>
                                    {telephone}
                                    <p className="email">{this.state.email}</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Contact