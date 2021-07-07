// import React, {useEffect, useState} from 'react';

// function Header() {

//     const [isLoading, setIsLoading] = useState(true)
//     const [posts, setPosts] = useState(null)

//     useEffect(() => {
//         fetch('https://quartier10h10-admin.herokuapp.com/header',
//         {
//             method: 'GET',
//             headers: {
//                 'Accept': 'Application/json'
//             }
//         })
//         .then(res => res.json())
//         .then(res => {
//             console.log(res)
//         })
//     }, [])

//     return (
//         <header>
//             <img src={} />
//             <nav>
//                 <ul>
//                     {}
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// export default Header

import React, { Component } from 'react';
// import {Link} from 'react-router-dom'


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
            console.log(result)
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

        console.log(this.state.navigation)

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <header>
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
                </header>
            )
        }
    }
}

export default Header
