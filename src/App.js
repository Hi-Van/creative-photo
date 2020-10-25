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
            <a className='twitter' href='https://hi-van.github.io/creative-photo/'>
              <span className="emoji-logo-header" role="img" aria-label='paper'>🎥 Phoooto</span>
            </a>
            <a className='twitter' href='https://twitter.com/Hi_Im_Van' target='_blank' rel='noopener noreferrer'>by Van S.</a>
          </div>
          <div className='header-div' />
        </div>

        <a href='https://github.com/Hi-Van/creative-photo' target='_blank' rel='noopener noreferrer'>
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
                <div className='text-other'> working away and waving through the days <span className='wave'role='img' aria-label='wave emoji'>👋</span><span className='wave'role='img' aria-label='wave emoji'>👋</span><span className='wave'role='img' aria-label='wave emoji'>👋</span></div>
                <img className='typing' src='https://media1.tenor.com/images/53d9fb19d58ca62f23311d8f8121863e/tenor.gif?itemid=12832638' alt='typing dots' />
              </div>
            </Fade>
            <Fade right>
              <div className='text-self'>While this may not be the most <i>'interesting'</i> photo,
              it still means a lot to me about my college life and experience so far.
              On the left side of the photo, is the website. On the right side, is the code.
              Now, the question is why I specifically chose a picture of the website during its development process?
              To simply put, It's actually very similar to how I've felt and navigated through the struggles of college.
              Most people will only see the end result of most outward layer of my work. While people will see the finished website, they may not realize the painstaking work done to make it.
              This is very similar to how I've been feeling through out college.
              I've always been putting copious amounts behing all my projects, whether for academics or personal purposes, and it makes me feel bored or often isolated from the lack of free time I have.
              However, once I'm able to see the finished project on the left side, I start loving the process all over again.
              <i>I chose this photo because it is a literal representation of all the hard work I typically put in, that doesn't normally attract attention. The weeks of dedication it takes to complete things to my standard, as I smile and wave though the days.</i>
              <span className='wave'role='img' aria-label='wave emoji'>👋</span>
                <span className='wave' role='img' aria-label='wave emoji'>👋</span>
                <span className='wave'role='img' aria-label='wave emoji'>👋</span>
              </div>
            </Fade>
          </div>
        </div>

        <div className='spacer' />

        <div className='photos'>
          <div id='photos-two'></div>
          <div className='text-wrap'>
            <Fade left>
              <div>
                <img className='sent-img' src={require('./artwork.PNG')} alt='website-code' />
                <div className='text-other'> Art with <span className='heart'role='img' aria-label='heat emoji'>💝</span> and <i>energy drinks</i></div>
                <img className='typing' src='https://media1.tenor.com/images/53d9fb19d58ca62f23311d8f8121863e/tenor.gif?itemid=12832638' alt='typing dots' />
              </div>
            </Fade>
            <Fade right>
              <div className='text-self'> This photo is simply a screenshot of one of my graphic art projects. 
               Unlike the first photo, there really isn't as much of an explaination to this.absthe reason why I chose this photo because it represents a part of me that contrasts with what people would imagine.
               I often like to do things that people would expect me not to typically enjoy or take part in.
               That's why I started doing graphic art and self-studying graphic design and SVG editing when I entered college.
               It was always fun when I surprised others with my artwork or made custom computer backgrounds and designs.
                
              </div>
            </Fade>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
