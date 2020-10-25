import React, { Component } from 'react';
import { Link as SmoothLink } from 'react-scroll';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className='header'>
          <div className='header-text'>
            <a className='twitter' href='https://hi-van.github.io/preeepare/'>
              <span className="emoji-logo-header" role="img" aria-label='paper'>🎥 Phoooto</span>
            </a>
            <a className='twitter' href='https://twitter.com/Hi_Im_Van' target='_blank' rel='noopener noreferrer'>by Van S.</a>
          </div>
          <div className='header-div' />
        </div>

        <a href='https://github.com/Hi-Van/preeepare' target='_blank' rel='noopener noreferrer'>
          <button className="to-code">
            <span className="emoji-logo" role="img" aria-label='paper'>🎥</span>
          </button>
        </a>

        <h1>Phoooto</h1>
        <h2>COMM1000 Creative Project</h2>

        <h1 className='chart-opt'>I am looking for...</h1>

        <div className='btn-layout'>
          <SmoothLink to="photos" smooth={true} duration={1000}><button className='btn-info'><span role="img" aria-label='papers'>🥇</span> PHOTO ONE</button></SmoothLink>
          <SmoothLink to="photos" smooth={true} duration={1000}><button className='btn-info'><span role="img" aria-label='papers'>🥈</span> PHOTO TWO</button></SmoothLink>
        </div>

        <div className='spacer' />

        <div id='photos'>
        </div>
      </div>
    );
  }
}

export default App;
