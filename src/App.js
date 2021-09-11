import Header from './global/header'
import Hero from './sections/hero'
import Manifesto from './sections/manifesto'
import Services from './sections/services'
import Realisations from './sections/realisations'
import Playlist from './sections/playlist'
import Contact from './sections/contact'
import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Manifesto />
      <div id="banner">
        <img src="https://quartier10h10.s3.eu-west-3.amazonaws.com/photo_1543332164_6e82f355badc_16e4ebb7a4.jpg" />
      </div>
      <Services />
      <Realisations />
      <Playlist />
      <Contact />
    </div>
  );
}

export default App;
