import './App.css'
import heroImage from './assets/img1.png'

function App() {
  return (
    <main>
      <div className="hero">
        <img className="hero-img" src={heroImage}/>
        <p className="hero-img-subheader">I LIKE THINGS THAT MAKE NOISE</p>
        <p className="hero-header">Hey, I'm</p>
        <span className="hero-name">Vivzi.</span>
        <div className="pointers-container">
          <span className="hero-pointer">15 YEARS OLD</span>
          <p className="hero-pPointer">PROGRAMMING AND PLAYING (guitar, duh)</p><br />
        </div>
        <p className="hero-description">I’m into programming, playing guitar and listening to music. This is a place for the things I make and the things I’m figuring out.</p>
        <hr />
        <div className="hobbies">
          <div className="hobby">
            <p className="hobby-header"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48px" width="48px" fill="292929"><path d="M12,33.3L2.7,24L12,14.7l2.1,2.1L6.95,24l7.15,7.2L12,33.3Zm8.6,6.65l-2.9-0.9l9.75-31L30.3,8.9L20.6,39.95ZM36,33.3l-2.1-2.1L41.05,24L33.9,16.8L36,14.7L45.3,24L36,33.3Z"/></svg> Programming</p>
            <p className="hobby-description">Sometimes I make things but mostly I break things</p>
          </div>
          <div className="hobby">
            <p className="hobby-header"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48px" width="48px" fill="292929"><path d="M14.33,39.83q-2.18-2.18-2.18-5.33t2.18-5.32T19.65,27q1.4,0 2.52,0.4t1.98,1.1V6h11.7v6.75h-8.7V34.5q0,3.15-2.18,5.33T19.65,42t-5.33-2.17Z"/></svg> Guitar</p>
            <p className="hobby-description">Six strings too many for my skill level</p>
          </div>
          <div className="hobby">
            <p className="hobby-header"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48px" width="48px" fill="292929"><path d="M34,36V12h3V36H34ZM11,36V12L28.3,24L11,36Zm3-12Zm0,6.25L23.05,24L14,17.75v12.5Z"/></svg> Listening to Music</p>
            <p className="hobby-description">The soundtrack to everything else</p>
          </div>
        </div>
      </div>
      <div className="things-im-making-section">
          <p className="tim-section-tag">01 / PROGRAMMING</p>
          <p className='tim-section-header'>THINGS I'M BUILDING</p>
          <p className='tim-section-description'>A home for my code, experiments and whatever comes next.</p>
          <div className='tim-section-project-grid'>
            <div className='tim-section-project-gridbox'>
              <div className='tim-section-project-gridbox-top'>
                <div className='tim-section-project-gridbox-top-left'>
                    PROJECT / README
                </div>
                <div className='tim-section-project-gridbox-top-right'>
                    [+]
                </div>
              </div>
              <span className='tim-section-project-gridbox-top-hr'>_</span>
              <p className='tim-section-project-gridbox-project-name'>[RIFFSTORM]</p>
              <p className='tim-section-project-gridbox-project-description'>[Guitar riff practice app with sound detection.]</p>
              <p className='tim-section-project-gridbox-project-stack-top'>BUILT WITH</p>
              <p className='tim-section-project-gridbox-project-stack-bottom'>[VITE / JAVASCRIPT]</p>
              <span className='tim-section-project-gridbox-top-hr'>_</span>
              <div className='tim-section-project-gridbox-project-bottom-link'>
                <a href="https://github.com/vivzi/riffstorm" className='tim-section-project-gridbox-project-bottom-github-link'>[GITHUB]</a>
                <div className='tim-section-project-gridbox-project-bottom-arrow'><svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 18 18" height="18px" width="18px" fill="292929"><path d="M5.06,16L4,14.94L12.94,6H8V4.5h7.5V12H14V7.06L5.06,16Z"/></svg></div>
              </div>
            </div>
            <div className='tim-section-project-gridbox'>
              <div className='tim-section-project-gridbox-top'>
                <div className='tim-section-project-gridbox-top-left'>
                    PROJECT / README
                </div>
                <div className='tim-section-project-gridbox-top-right'>
                    [+]
                </div>
              </div>
              <span className='tim-section-project-gridbox-top-hr'>_</span>
              <p className='tim-section-project-gridbox-project-name'>[EXML 26]</p>
              <p className='tim-section-project-gridbox-project-description'>[Working on my school club's (Exun's) ML event. EXML 26 Was a 3v3 Marble Run game.]</p>
              <p className='tim-section-project-gridbox-project-stack-top'>BUILT WITH</p>
              <p className='tim-section-project-gridbox-project-stack-bottom'>[GODOT / PYTHON]</p>
              <span className='tim-section-project-gridbox-top-hr'>_</span>
              <div className='tim-section-project-gridbox-project-bottom-link'>
                <a href="https://github.com/v-pun215/exml26" className='tim-section-project-gridbox-project-bottom-github-link'>[GITHUB]</a>
                <div className='tim-section-project-gridbox-project-bottom-arrow'><svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 18 18" height="18px" width="18px" fill="292929"><path d="M5.06,16L4,14.94L12.94,6H8V4.5h7.5V12H14V7.06L5.06,16Z"/></svg></div>
              </div>
            </div>
            <div className='tim-section-project-gridbox'>
              <div className='tim-section-project-gridbox-top'>
                <div className='tim-section-project-gridbox-top-left'>
                    PROJECT / README
                </div>
                <div className='tim-section-project-gridbox-top-right'>
                    [+]
                </div>
              </div>
              <span className='tim-section-project-gridbox-top-hr'>_</span>
              <p className='tim-section-project-gridbox-project-name'>[CRAI]</p>
              <p className='tim-section-project-gridbox-project-description'>[W.I.P] [Clash Royale AI. It's a neural network trained through reinforcement learning to play Clash Royale.]</p>
              <p className='tim-section-project-gridbox-project-stack-top'>BUILT WITH</p>
              <p className='tim-section-project-gridbox-project-stack-bottom'>[GODOT / PYTHON]</p>
              <span className='tim-section-project-gridbox-top-hr'>_</span>
              <div className='tim-section-project-gridbox-project-bottom-link'>
                <a href="https://github.com/vivzi/crai" className='tim-section-project-gridbox-project-bottom-github-link'>[GITHUB]</a>
                <div className='tim-section-project-gridbox-project-bottom-arrow'><svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 18 18" height="18px" width="18px" fill="292929"><path d="M5.06,16L4,14.94L12.94,6H8V4.5h7.5V12H14V7.06L5.06,16Z"/></svg></div>
              </div>
            </div>
          </div>
          <p className='tim-section-footer'>{'</work_in_progress>'}</p>
      </div>
      <div className="guitar-and-music-section">
        <div className="guitar">
            <p className="generic-tag">02 / GUITAR</p>
            <p className="generic-title">ONE SONG AT A TIME.</p>
            <div className="practice-notebook">
                <p className="generic-tag">CURRENTLY LEARNING</p>
                <p className="generic-special-title">[Fade to Black]</p>
                <p className="generic-description">BY [MetallicA]</p>
                <span className='practice-notebook-hr'>_</span>
                <p className="practice-notebook-tag">WORKING ON</p>
                <p className="practice-notebook-song-part">[Main Solo]</p>
            </div>
        </div>
        <div className="music">
            <p className="generic-tag">03 / LISTENING TO MUSIC</p>
            <p className="generic-title">IN MY HEADPHONES.</p>
            <div className="editable-spotify-area">
                <p className="generic-tag">MY SPOTIFY CORNER</p>
                <p className="generic-special-title">[vivzi]</p>
                <p className="generic-description">I love metalcore I love metalcore I love metalcore also did I mention that I love metalcore?</p>
                <div className="spotify-link-border">
                  <a href="https://open.spotify.com/user/spbcypvr019mzcj4jh0xf1p0n" className="spotify-link">[https://open.spotify.com/user/spbcypvr019mzcj4jh0xf1p0n]</a>
                  <div className='spotify-link-arrow'><svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 18 18" height="18px" width="18px" fill="292929"><path d="M5.06,16L4,14.94L12.94,6H8V4.5h7.5V12H14V7.06L5.06,16Z"/></svg></div>
                </div>
                
            </div>
        </div>
      </div>
      <div className="socials-section">
        <p className="generic-tag">04 / ELSEWHERE ON THE INTERNET</p>
        <div className="socials-grid">
          <div className="socials-grid-title-frame">
            <p className="socials-title">TALK TO ME, IF YOU WANT.</p>
          </div>
          <div className="socials-grid-frame">
              <p className="socials-grid-frame-title">INSTAGRAM</p>
              <p className="socials-grid-frame-id">@_vivaan.choudhary</p>
              <span className="socials-grid-frame-hr">_</span>
          </div>
          <div className="socials-grid-frame">
              <p className="socials-grid-frame-title">DISCORD</p>
              <p className="socials-grid-frame-id">@_sk3.</p>
              <span className="socials-grid-frame-hr">_</span>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-left">
          <p className="footer-header">Thanks for Stopping By.</p>
          <p className="footer-tag">vivzi.</p>
        </div>
        <div className="footer-right">
          <a href="https://riffstorm.vivzi.xyz"><img src='riffstorm.svg' width="144" height="40"></img></a>
        </div>
      </div>
    </main>
  )
}

export default App;