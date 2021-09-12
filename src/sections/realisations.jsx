import React from 'react';
import Markdown from 'markdown-to-jsx'
// import ReactDOM from 'react-dom'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/swiper-react";

// Import Swiper styles
// import 'swiper/css';

class Realisations extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        title: '',
        images: []
      };
    }
  
    componentDidMount() {
      fetch("https://quartier10h10-admin.herokuapp.com/realisations")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              title: result.Title,
              images: result.Images
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
            <div id="realisations" className="realisations">
                <div className="container">
                    <h2 className="title">{this.state.title}</h2>
                    <div className="items">
                        {this.state.images.map((image) => {
                            console.log(image)
                            return (
                                <div key={image.id} className='item'>
                                    <img src={image.url} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Realisations;