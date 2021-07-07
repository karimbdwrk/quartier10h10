import Header from './global/header'
import Hero from './sections/hero'
import Manifesto from './sections/manifesto'
import Services from './sections/services'
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
      <Services />
      <Playlist />
      <Contact />
    </div>
  );
}

export default App;
