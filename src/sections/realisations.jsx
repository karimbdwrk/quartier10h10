import React from 'react';
import ReactDOM from 'react-dom'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

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
            <div id="realisations" className="container">
                <h2>{this.state.title}</h2>
                {/* <OwlCarousel className='owl-theme' margin={10} >
                    {this.state.images.map((image) => {
                        console.log(image)
                        return (
                            <div key={image.id} className='item'>
                                <img src={image.url} />
                            </div>
                        )
                    })}
                </OwlCarousel> */}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>

            </div>
        );
    }
}
 
export default Realisations;