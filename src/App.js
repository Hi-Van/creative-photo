import React, { Component } from 'react';
import { Link as SmoothLink } from 'react-scroll';
import Fade from 'react-reveal/Fade';
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
          <SmoothLink to="photos-one" smooth={true} duration={1000}><button className='btn-info'><span role="img" aria-label='papers'>🥇</span> PHOTO ONE</button></SmoothLink>
          <SmoothLink to="photos-two" smooth={true} duration={1000}><button className='btn-info'><span role="img" aria-label='papers'>🥈</span> PHOTO TWO</button></SmoothLink>
        </div>

        <div className='spacer' />

        <div className='photos'>
          <div id='photos-one'></div>
          <div className='text-wrap'>
            <Fade left>
              <div>
                <img className='sent-img' src={require('./screen-capture-creative.jpg')} alt='website-code' />
                <div className='text-other'>wave through the days <span className='wave'role='img' aria-label='wave emoji'>👋</span><span className='wave'role='img' aria-label='wave emoji'>👋</span><span className='wave'role='img' aria-label='wave emoji'>👋</span></div>
                <img className='typing' src='https://media1.tenor.com/images/53d9fb19d58ca62f23311d8f8121863e/tenor.gif?itemid=12832638' alt='typing dots' />
              </div>
            </Fade>
            <Fade right>
              <div className='text-self'>text self</div>
            </Fade>
          </div>
        </div>

        <div className='spacer' />
      </div >
    );
  }
}

export default App;
